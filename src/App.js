import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?{" "}
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <>
      <p>
        <lable>How much was the bill? </lable>
        <input
          type="text"
          placeholder="Bill value"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </p>
    </>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <p>
      <lable>{children}</lable>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value={0}>Dissdisefied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absoulaty Amazing(20%)</option>
      </select>
    </p>
  );
}
function Output({ bill, tip }) {
  return (
    <p>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </p>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
