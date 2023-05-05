import Image from "next/image";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Head from "next/head";
import BackgroundPicture from "../assets/images/sendang-bg.jpg";
import LogoPicture from "../assets/images/sendang-logo.png";
import { useCountdown } from "hooks/countdown";
import {
  ChangeEvent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { DataContext } from "./_app";
import { useRouter } from "next/router";
import { http } from "utils/fetch";

const inter = Inter({ subsets: ["latin"] });

const CountDownTimer = dynamic(() => import("../component/Countdown"), {
  ssr: false,
});

export default function Home() {
  const navigate = useRouter();
  const numberStudent = useRef("");
  const duration = useCountdown();
  const durationRemaining =
    duration.milliseconds() > 0 ||
    duration.seconds() > 0 ||
    duration.minutes() > 0 ||
    duration.hours() > 0 ||
    duration.days() > 0;

  const dataContext = useContext(DataContext);
  const [studentNumberTest, setStudentNumberTest] = useState("");
  const [studentData, setStudentData] = useState({
    success: false,
    message: "",
    result: null,
  });

  const handleSearch = async (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    dataContext.setNumberTestStudent(studentNumberTest);
    const payload = { numberOfTest: numberStudent.current };
    const { data } = await http().post("/api/check-number", payload);
    setStudentData(data);
  };

  const handleChangeNumber = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value.length) {
      dataContext.setNumberTestStudent(0);
    }
    setStudentNumberTest(event.target.value);
    numberStudent.current = event.target.value;
  };

  useEffect(() => {
    if (studentData.result) {
      dataContext.setStudentResultData(studentData.result);
      navigate.push("/detail-siswa-lulus");
    }
  }, [studentData.result]);

  return (
    <section>
      <Head>
        <title>Pengumuman Kelulusan - SMA Negeri 1 Sendang Agung</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div className="z-0">
          <div className="fixed w-screen backdrop-blur-2xl top-0 bottom-0 left-0 bg-gray/50 min-h-screen z-20"></div>
          <div className="flex justify-center">
            <div className="fixed w-full min-h-screen">
              <Image
                className="-z-20"
                src={BackgroundPicture}
                alt="Next.js Logo"
                fill
                priority
              />
            </div>
          </div>
        </div>
        <section className="relative z-50 py-10 min-h-screen">
          <main className="flex flex-col items-center gap-5">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-1/4 flex justify-center">
                <Image
                  src={LogoPicture}
                  alt="school-logo"
                  width={200}
                  height={200}
                  priority
                />
              </div>
              <div className="text-center text-white pt-2 sm:pt-10">
                <h4 className="sm:text-lg md:text-3xl">
                  Sistem Informasi Kelulusan
                </h4>
                <h1 className="font-bold sm:text-3xl md:text-5xl pt-1 pb-7 md:py-5">
                  SMA Negeri 1 Sendang Agung
                </h1>
              </div>
            </div>
            {durationRemaining ? (
              <div className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white p-5 flex justify-center gap-2 sm:gap-11 rounded-md w-1/2 text-[10px] xs:text-sm md:text-xl lg:text-2xl h-28 sm:h-36 md:h-48 items-end mt-20">
                <div className="w-3/5 bg-black px-2 py-5 absolute -top-10 text-white text-center rounded-md shadow-sm leading-snug">
                  Pengumuman akan dibukan pada <br />
                  <span className="font-semibold">06-05-2023</span>
                </div>
                <CountDownTimer duration={duration} />
              </div>
            ) : (
              <div className="sm:w-1/2 bg-white py-5 flex flex-col items-center justify-center gap-10 rounded-lg px-7 shadow-2xl">
                <input
                  type="text"
                  placeholder="Masukan Nomor Ujian"
                  className="w-3/4 text-center py-5 outline-none border-b-2 border-black text-xs sm:text-base"
                  onChange={(event) => handleChangeNumber(event)}
                  onCopy={(event) => {
                    event.preventDefault();
                    return false;
                  }}
                  onPaste={(event) => {
                    event.preventDefault();
                    return false;
                  }}
                />
                <button
                  type="button"
                  className="bg-red-900 px-10 py-2 rounded-md text-white font-light text-sm sm:text-lg"
                  onClick={(event) => handleSearch(event)}
                >
                  Cari Sekarang
                </button>
              </div>
            )}
          </main>
        </section>
      </main>
    </section>
  );
}
