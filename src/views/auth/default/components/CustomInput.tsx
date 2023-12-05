// interface InputProps {
//   width:
// }

export default function CustomInput(props: {
  tag: string;
  label: string;
  len?: number;
  pos_r?: boolean;
}) {
  return (
    <div className="mt-5 flex items-center justify-center font-bold">
      <div className="flex  items-center ">
        {props.tag && props.pos_r && (
          <>
            <h3 className=" mr-[1rem] text-base">{props.tag}</h3>
            <div className={`relative w-[${props.len}px]`}>
              <input
                className="border-blue-gray-200 bg-transparent text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-b pb-1.5 text-left font-sans text-base font-normal outline outline-0 transition-all focus:border-gray-900 focus:outline-0 disabled:border-0 dark:bg-[black]"
                placeholder=" "
              />
              {/* <label className="after:content[''] peer-placeholder-shown:text-blue-gray-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[2.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900">
            {props.label}
          </label> */}
            </div>
          </>
        )}

        {props.tag && !props.pos_r && (
          <>
            <div className={`relative w-[${props.len}px]`}>
              <input
                className="border-blue-gray-200 bg-transparent text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full border-b pb-1.5 text-right font-sans text-base font-normal outline outline-0 transition-all focus:border-gray-900 focus:outline-0 disabled:border-0 dark:bg-[black]"
                placeholder=" "
              />
            </div>
            <h3 className="mb-[5px] ml-[10px] text-base ">{props.tag}</h3>
          </>
        )}
      </div>
    </div>
  );
}
