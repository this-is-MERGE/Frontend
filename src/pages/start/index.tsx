import useInnerNavigator from "hooks/useInnerNavigator";
import TextLogo from "assets/custom/TextLogo.svg";
import WaveFooter from "assets/custom/WaveFooter.svg";

export default function StartPage(props: { [x: string]: any }) {
  const { push } = useInnerNavigator();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="container flex h-fit w-fit flex-col">
        <img
          className="w-[429.2px] items-center justify-center"
          src={TextLogo}
          alt="Health_Mate_TextLogo"
        />
        <button
          onClick={() => push("/sign-in")}
          className="mt-[46px] h-[93px] rounded-xl bg-brand-400 px-4 py-3 text-2xl font-bold text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          시작하기
        </button>
      </div>
      <img
        className="absolute bottom-0 w-screen"
        src={WaveFooter}
        alt="Health_Mate_WaveFooter"
      />
    </div>
  );
}
