import React from "react";

const InputSelect = () => {
  return (
    <select name="test" className="test">
      <option value="select0">Select the category.</option>
      <option value="select1">Financial Fraud</option>
      <option value="select2">[API] API Error Confirm</option>
      <option value="select3">[Withdrawal] 거래지원종료 자산 사후 출금</option>
      <option value="select4">[Deposit] 상장 가상자산 오입금</option>
      <option value="select5">[Deposit] 미상장 가상자산 오입금</option>
      <option value="select6">[Deposit] 기타 가상자산 오입금 및 입금누락</option>
      <option value="select7">[Verification] Support Documents for Level Confirmation</option>
      <option value="select8">[etc] Coupon Refund Request</option>
      <option value="select9">
        [기타] For international customers, please select this inquiry
      </option>
      <option value="select10">[기타] 빗썸 서비스 개선 제안</option>
      <option value="select11">직접입력</option>
    </select>
  );
};

export default InputSelect;
