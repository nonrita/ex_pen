import React from 'react';
import InputNumber from './inputNumber';
import FormButton from './formButton';

const Form = () => {
  return (
    <form className="space-y-2 py-1">
      <div className="flex justify-between ">
        <label htmlFor="sex">性別</label>
        <select
          name="sex"
          id="sex"
          defaultValue={'x'}
          className="border-2 rounded-md border-amber-200 w-[6em] pl-1"
        >
          <option value="x">男性</option>
          <option value="y">女性</option>
        </select>
      </div>
      <InputNumber
        tag={'age'}
        label={'年齢'}
        min={0}
        max={120}
        defaultValue={23}
      ></InputNumber>
      <hr className="border-t-4 border-dotted border-amber-500 my-3" />
      <InputNumber
        tag={'age'}
        label={'家賃'}
        min={0}
        defaultValue={70000}
      ></InputNumber>
      <InputNumber
        tag={'age'}
        label={'食事'}
        min={0}
        defaultValue={45000}
      ></InputNumber>
      <InputNumber
        tag={'age'}
        label={'通信費'}
        min={0}
        defaultValue={13000}
      ></InputNumber>
      <InputNumber
        tag={'age'}
        label={'生活日用品'}
        min={0}
        defaultValue={3000}
      ></InputNumber>
      <InputNumber
        tag={'age'}
        label={'貯蓄・投資'}
        min={0}
        defaultValue={30000}
      ></InputNumber>
      <InputNumber
        tag={'age'}
        label={'その他'}
        min={0}
        defaultValue={20000}
      ></InputNumber>
      <div className="flex justify-center pt-2">
        <FormButton>投稿</FormButton>
      </div>
    </form>
  );
};

export default Form;
