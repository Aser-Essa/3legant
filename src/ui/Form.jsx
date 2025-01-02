/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import CheckBox from "./CheckBox";
import { motion } from "motion/react";

const formContext = createContext();

function Form({ children, errors, onSubmit, register, watch, className }) {
  return (
    <>
      <formContext.Provider value={{ errors, register, watch }}>
        <form onSubmit={onSubmit} className={className}>
          {children}
        </form>
      </formContext.Provider>
    </>
  );
}

function Input({
  type,
  id,
  name,
  value,
  placeholder,
  additional,
  disabled,
  className,
  onChange,
  maxLength,
}) {
  const { register, errors } = useContext(formContext);
  return (
    <motion.div
      className={`${type === "radio" ? "" : "h-full w-full"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        maxLength={maxLength}
        {...register(id, {
          onChange: onChange,
          required: "This Field Is Required",
          ...additional,
        })}
      />
      <p className="mt-1 text-xs font-medium text-red-500">
        {errors[id]?.message}
      </p>
    </motion.div>
  );
}

function TextArea({ id, placeholder, additional, className }) {
  const { register, errors } = useContext(formContext);

  return (
    <div className={`w-full`}>
      <textarea
        placeholder={placeholder}
        className={className}
        {...register(id, {
          required: "This Field Is Required",
          ...additional,
        })}
      />
      <p className="mt-1 text-xs font-medium text-red-500">
        {errors[id]?.message}
      </p>
    </div>
  );
}

function Label({ children, id, type, className }) {
  return (
    <>
      <label
        htmlFor={id}
        className={`${type === "radio" ? "" : "flex w-full flex-col gap-3 text-black-shade-4"} ${className}`}
      >
        {children}
      </label>
    </>
  );
}

function Check({ id, isRequired, children }) {
  const { register, errors } = useContext(formContext);

  return (
    <>
      <div>
        <div className="mb-2 flex items-center gap-3 font-inter">
          <CheckBox register={register} id={id} isRequired={isRequired} />
          <label
            htmlFor={id}
            className="w-full cursor-pointer text-black-shade-4"
          >
            {children}
          </label>
        </div>
        <p className="text-xs font-medium text-red-500">
          {errors[id]?.message}
        </p>
      </div>
    </>
  );
}

function Radio({ value, name, defaultChecked }) {
  const { register, watch } = useContext(formContext);

  // eslint-disable-next-line no-unused-vars
  let watchName = watch(name);

  return (
    <div>
      <input
        type="radio"
        defaultChecked={defaultChecked}
        value={value}
        className="peer relative mt-1 h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-[50%] bg-white p-2 outline outline-1 checked:border-4 checked:border-white checked:bg-[#121212] checked:p-0"
        {...register(`${name}`)}
      />
    </div>
  );
}

Form.Input = Input;
Form.Check = Check;
Form.Label = Label;
Form.Radio = Radio;
Form.TextArea = TextArea;

export { Input, Check, Radio, TextArea };
export default Form;
