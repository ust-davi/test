import styled, { css } from 'styled-components';

import { ChangeEvent, useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {
  Select,
  MenuItem,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from '@mui/material';
import useAddress from '../hooks/useAddress';
import useAddressDetail from '../hooks/useAddressDetail';
import {
  StoreCounselingRequest,
  CommonAddressDetailRequest,
  Sido,
} from '../type';
import useShopCounseling from '../hooks/useShopCounseling';

interface IStoreInquiryForm {
  companyName: string;
  name: string;
  phoneNumber: string;
  districtSi: string;
  districtDo: string;
  isAgree: boolean;
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
    },
  },
};

const StoreInquiry = () => {
  const [sidoKey, setSidoKey] = useState<string>('1');

  const { data: address } = useAddress();
  const request: CommonAddressDetailRequest = {
    sidoKey,
  };
  const { data: addressDetail, refetch } = useAddressDetail(request);
  const { mutateAsync } = useShopCounseling();

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm<IStoreInquiryForm>({
    defaultValues: {
      isAgree: true,
    },
  });

  const onSubmit: SubmitHandler<IStoreInquiryForm> = (data) => {
    const { districtSi, districtDo, companyName, name, phoneNumber } = data;

    const request: StoreCounselingRequest = {
      address1: districtSi,
      address2: districtDo,
      company_NAME: companyName,
      owner_NAME: name,
      phone: phoneNumber,
    };
    mutateAsync(request);
  };

  const onChangeDistrictSi = async (event: ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.value;
    if (address?.data?.data !== undefined) {
      const index =
        address?.data?.data?.findIndex((obj: Sido) => obj.sido === selected) +
        1;
      setSidoKey(String(index));
    }
  };

  useEffect(() => {
    refetch();
  }, [sidoKey]);

  return (
    <>
      <NavBar />
      <Container>
        <ContentsWrap onSubmit={handleSubmit(onSubmit)}>
          <ColWrap>
            <Label variant="body1">상호</Label>
            <Controller
              name="companyName"
              control={control}
              defaultValue=""
              rules={{ required: '상호명을 입력해주세요' }}
              render={({ field }) => (
                <StyledInput
                  type="text"
                  variant="outlined"
                  size="small"
                  {...field}
                  error={!!errors.companyName}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="companyName"
              render={({ message }) => (
                <ErrorMessageText>{message}</ErrorMessageText>
              )}
            />
          </ColWrap>
          <ColWrap>
            <Label variant="body1">대표자 성함</Label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: '성함을 입력해주세요.' }}
              render={({ field }) => (
                <StyledInput
                  type="text"
                  variant="outlined"
                  size="small"
                  {...field}
                  error={!!errors.name}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <ErrorMessageText>{message}</ErrorMessageText>
              )}
            />
          </ColWrap>
          <ColWrap>
            <Label variant="body1">전화번호</Label>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              rules={{
                required: '휴대폰 번호를 입력해주세요.',
                pattern: {
                  value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                  message: '전화번호 형식에 맞게 입력해주세요.',
                },
              }}
              render={({ field }) => (
                <StyledInput
                  type="text"
                  variant="outlined"
                  size="small"
                  {...field}
                  error={!!errors.phoneNumber}
                />
              )}
            />
            <ErrorMessage
              errors={errors}
              name="phoneNumber"
              render={({ message }) => (
                <ErrorMessageText>{message}</ErrorMessageText>
              )}
            />
          </ColWrap>
          <ColWrap>
            <Label variant="body1">지역</Label>
            <RowWrap>
              <DropdownArea>
                <Controller
                  name="districtSi"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <DistrictSelect
                      onChange={(e: any) => {
                        onChange(e);
                        onChangeDistrictSi(e);
                      }}
                      onBlur={onBlur}
                      value={value}
                      name={name}
                      ref={ref}
                      MenuProps={MenuProps}
                      error={Boolean(errors.districtSi)}
                    >
                      {address?.data?.data.map((obj: any) => (
                        <MenuItem
                          key={String(obj.sidoKey)}
                          value={String(obj.sido)}
                        >
                          {obj.sido}
                        </MenuItem>
                      ))}
                    </DistrictSelect>
                  )}
                />
              </DropdownArea>
              <DropdownArea2>
                <Controller
                  name="districtDo"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: !(getValues('districtSi') === '세종특별자치시'),
                  }}
                  render={({ field }) => (
                    <DistrictSelect
                      {...field}
                      MenuProps={MenuProps}
                      error={Boolean(errors.districtDo)}
                    >
                      {addressDetail?.data?.data.map((obj: any) => (
                        <MenuItem key={obj.gugun} value={obj.gugun}>
                          {obj.gugun}
                        </MenuItem>
                      ))}
                    </DistrictSelect>
                  )}
                />
              </DropdownArea2>
            </RowWrap>
          </ColWrap>
          <Caption variant="caption">
            상호, 대표자, 전화번호등의 개인정보는 업무 제휴을 위한 정보로만
            사용하며, 목적이 달성된 후 수집된 정보를 폐기하고, 이외의 다른
            목적으로 사용되지 않습니다.
          </Caption>
          <Controller
            name="isAgree"
            control={control}
            rules={{
              required: '동의를 진행해야합니다.',
            }}
            render={({ field }) => (
              <StyledFormControlLabel
                label="동의합니다"
                {...field}
                control={
                  <Checkbox
                    defaultChecked
                    color="error"
                    sx={{
                      color: 'var(--violet60)',
                      '&.Mui-checked': {
                        color: 'var(--violet60)',
                      },
                    }}
                  />
                }
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="isAgree"
            render={({ message }) => (
              <ErrorMessageText>{message}</ErrorMessageText>
            )}
          />
          <Line />
          <ColWrap>
            <H5 variant="h5">1588-1588</H5>
            <Font variant="body1">
              평일 오전 9시 ~ 오후 6시 00분 주말, 공휴일 휴무 (점심시간 12시 ~
              1시)
            </Font>
          </ColWrap>
          <NextButton
            type="submit"
            variant="contained"
            color="primary"
            // color="var(--violet)"
          >
            확인
          </NextButton>
        </ContentsWrap>
      </Container>
    </>
  );
};

interface IStyledProps {
  error?: boolean;
}

const Container = styled.main`
  width: 100%;
  max-width: 1158px;
  height: inherit;
`;

const ContentsWrap = styled.form`
  width: 100%;
  max-width: 313px;
  height: inherit;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > div {
    margin: 18px 0;
  }
  @media screen and (max-width: 768px) {
    padding-top: 70px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: none;
  }
`;

const RowWrap = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ColWrap = styled.div``;

const Label = styled(Typography)`
  text-align: left;
  font-weight: 700;
`;

const H5 = styled(Typography)`
  text-align: center;
`;

const Font = styled(Typography)`
  word-break: keep-all;
  text-align: center;
`;

const Caption = styled(Typography)`
  word-break: keep-all;
  line-height: 17.16px;
`;

const DropdownArea = styled.div`
  width: 48%;
  padding-right: 2%;
  span,
  div {
    width: 100%;
  }
`;
const DropdownArea2 = styled.div`
  width: 60%;
  span,
  div {
    width: 100%;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 18px 0;
  background: var(--grey30);
`;

const NextButton = styled(Button)`
  && {
    width: 100%;
    background-color: var(--violet60);
    &: hover {
      background-color: var(--violet70);
    }
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 16px;
  }
`;

const StyledInput = styled(TextField)`
  width: 100%;
  height: 40px;
  & > input {
    height: 40px;
    ${({ error }) =>
      error &&
      css`
        border: 1px solid var(--red50);
        box-shadow: none;
      `}
  }
`;

const ErrorMessageText = styled.p`
  color: var(--red60);
`;

const DistrictSelect = styled(Select)<IStyledProps>`
  height: 40px;
  ${({ error }) =>
    error &&
    css`
      border: 1px solid var(--red50);
      box-shadow: none;
    `}
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  color: var(--violet70);
`;
export default StoreInquiry;
