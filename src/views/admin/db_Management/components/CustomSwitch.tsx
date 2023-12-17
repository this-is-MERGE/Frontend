export default function CustomSwitch() {
  return (
    <select className="mt-[6px] w-full rounded-lg border border-gray-500 bg-[white] p-2.5 text-sm text-gray-500 file:block dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
      <option selected>소속 부서를 선택해주세요</option>
      <option value="마취통증과">마취통증과</option>
      <option value="신경통증과">신경통증과</option>
      <option value="재활치료과">재활치료과</option>
    </select>
  );
}
