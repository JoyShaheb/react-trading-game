import React, { useState, useEffect } from "react";
import InputField from "../Components/Form/InputField";
import CurrencyDropDown from "../Components/Form/Dropdown";
import { CurrencyType } from "../types.d";
import { availableCurrencies } from "../Constants";
import Display from "../Components/Display/Display";

interface iData {
  buy: number;
  sell: number;
  quantity: number;
  feesPercent: number;
  shares: number;
  Net: number;
  totalFees: number;
  currency: any;
}

const initialState: iData = {
  buy: 0,
  sell: 0,
  quantity: 0,
  feesPercent: 0.1,
  shares: 0,
  Net: 0,
  totalFees: 0,
  currency: "$",
};

const ProfitCalculator = () => {
  // plans -> ROI, ROI percent, currency, API Data
  const [data, setData] = useState<iData>({
    ...initialState,
    currency: "$",
  });

  const onChangeCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currencyValue = e.target.value as CurrencyType; // convert string to CurrencyType
    setData({ ...data, currency: currencyValue });
    console.log("kujsdchbj", e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setData(initialState);
  };

  useEffect(() => {
    const { buy, sell, shares, feesPercent } = data;
    const buyFee = (buy * shares * feesPercent) / 100;
    const sellFee = (sell * shares * feesPercent) / 100;
    const totalFees = buyFee + sellFee;
    const NetProfit = (sell - buy) * shares - totalFees;
    setData({
      ...data,
      totalFees,
      Net: +NetProfit.toFixed(4),
    });
  }, [data.buy, data.sell, data.shares, data.feesPercent]);

  const text = data.Net > 0 ? "Profit" : "Loss";

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-0 md:px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-3 py-7 space-y-4 md:space-y-6 sm:p-8 flex flex-col">
            <CurrencyDropDown
              label={data.currency}
              onChange={onChangeCurrency}
              className="self-end"
              options={availableCurrencies}
              selectedValue={data.currency}
            />

            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Profit Calculator
            </h1>
            <div className="flex justify-center gap-10">
              <div className="">
                {data.Net > 0 && (
                  <Display
                    color="text-green-400"
                    currency={data.currency}
                    text={text}
                    digits={+data.Net}
                  />
                )}

                {data.Net < 0 && (
                  <Display
                    color="text-red-400"
                    currency={data.currency}
                    text={text}
                    digits={+data.Net}
                  />
                )}

                {data.Net == 0 && (
                  <Display
                    color="text-red-400"
                    currency={data.currency}
                    text="No Profit / Loss"
                    digits={+data.Net}
                  />
                )}
              </div>
              <Display
                color="text-blue-400"
                currency={data.currency}
                text="Total Fees"
                digits={+data.totalFees}
              />
            </div>
            <form className="space-y-4 md:space-y-4" onSubmit={handleSubmit}>
              <InputField
                label="Buying Price / Share"
                type="number"
                name="buy"
                id="buy"
                value={data.buy}
                placeholder="Your Buying Price"
                onChange={handleChange}
              />
              <InputField
                label="Total Shares"
                type="number"
                name="shares"
                id="shares"
                value={data.shares}
                placeholder="Total Shares You Own"
                onChange={handleChange}
              />
              <span className="text-gray-400 text-sm">
                Total Investment: {data.currency} {data.buy * data.shares}
              </span>
              <InputField
                label="Selling Price / Share"
                type="number"
                name="sell"
                id="sell"
                value={data.sell}
                placeholder="Your Selling Price"
                onChange={handleChange}
              />
              <InputField
                label="Platform Fee (%)"
                type="number"
                name="feesPercent"
                id="feesPercent"
                value={data.feesPercent}
                placeholder="Platform fees in percentage"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
