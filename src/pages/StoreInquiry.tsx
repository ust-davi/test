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
            <Label variant="body1">??????</Label>
            <Controller
              name="companyName"
              control={control}
              defaultValue=""
              rules={{ required: '???????????? ??????????????????' }}
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
            <Label variant="body1">????????? ??????</Label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: '????????? ??????????????????.' }}
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
            <Label variant="body1">????????????</Label>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              rules={{
                required: '????????? ????????? ??????????????????.',
                pattern: {
                  value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                  message: '???????????? ????????? ?????? ??????????????????.',
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
            <Label variant="body1">??????</Label>
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
                    required: !(getValues('districtSi') === '?????????????????????'),
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
            ??????, ?????????, ?????????????????? ??????????????? ?????? ????????? ?????? ????????????
            ????????????, ????????? ????????? ??? ????????? ????????? ????????????, ????????? ??????
            ???????????? ???????????? ????????????.
          </Caption>
          <Controller
            name="isAgree"
            control={control}
            rules={{
              required: '????????? ?????????????????????.',
            }}
            render={({ field }) => (
              <StyledFormControlLabel
                label="???????????????"
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
              ?????? ?????? 9??? ~ ?????? 6??? 00??? ??????, ????????? ?????? (???????????? 12??? ~
              1???)
            </Font>
          </ColWrap>
          <NextButton
            type="submit"
            variant="contained"
            color="primary"
            // color="var(--violet)"
          >
            ??????
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
