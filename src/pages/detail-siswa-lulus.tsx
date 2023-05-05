import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { DataContext } from "./_app";
import HeaderLatter from "../assets/images/header-latter.jpg";
import SignNature from "../assets/images/signature-headmaster-school.jpg";
import { useRouter } from "next/router";

type Props = {};

const DetailsGraduateStudents = (props: Props) => {
  const navigate = useRouter();
  const data = useContext(DataContext);

  const onBackPress = () => {
    navigate.replace("/");
    data.setNumberTestStudent(0);
    data.setStudentResultData({});
  };

  useEffect(() => {
    if (!data.result || !data.numberTestStudent) {
      navigate.replace("/");
    }
  });
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      <button
        className="fixed z-50 bottom-7 right-7 bg-red-900 text-white p-4 rounded-xl"
        type="button"
        onClick={onBackPress}
      >
        Kembali
      </button>
      <div className="lg:w-7/12 xl:w-[1000px]">
        <div className="flex justify-center">
          <Image
            alt="header-latter"
            src={HeaderLatter}
            width={1000}
            height={100}
          />
        </div>
        <div className="p-2 xs:p-10 flex flex-col text-xs xs:text-base">
          <div className="flex justify-between">
            <div className="flex flex-col w-1/2 text-[11px] xs:text-base">
              <div className="flex gap-2 xs:gap-5">
                <span className="w-1/6">Nomor</span>
                <span>: 421.3/ 462/III.01/ SMA/2023</span>
              </div>
              <div className="flex gap-2 xs:gap-5">
                <span className="w-1/6">Lamp</span>
                <span>: -</span>
              </div>
              <div className="flex gap-2 xs:gap-5">
                <span className="w-1/6">Prihal</span>
                <span>: Pengumuman Kelulusan</span>
              </div>
            </div>
            <div className="flex flex-col text-[11px] xs:text-base">
              <span>
                Kepada:
                <br />
                Orang tua/Wali Murid
                <br />
                {data.result.name ?? ".............."}
                <br />
                di:
                <br />
                Tempat
              </span>
            </div>
          </div>
          <div className="flex justify-center pt-6 xs:pt-10 px-5 xs:px-12 text-[11px] xs:text-base">
            <div>
              <span>
                Berdasarkan hasil Rapat Pleno Sekolah Menengah Atas (SMA) Negeri
                1 Sendangagung yang dilaksanakan pada tanggal 4 Mei 2023 dan
                hasil penilaian pengetahuan, Keterampilan dan penilaian sikap
                selama menjadi siswa, dengan ini menyatakan bahwa:
              </span>
              <div className="flex w-full justify-center py-2">
                <div className="w-10/12 xs:w-2/3 flex flex-col items-center md:pl-10">
                  <div className="flex gap-2 xs:gap-5  w-full">
                    <span className="w-1/3 lg:w-1/5">Nama</span>
                    <span>
                      : <strong>{data?.result?.name}</strong>
                    </span>
                  </div>
                  <div className="flex gap-2 xs:gap-5 w-full">
                    <span className="w-1/3 lg:w-1/5">Nomor Ujian</span>
                    <span>
                      : <strong>{data?.numberTestStudent}</strong>
                    </span>
                  </div>
                </div>
              </div>
              <span>
                Dinyatakan{" "}
                <strong className="underline">
                  {data?.result?.description?.toLowerCase() === "lulus"
                    ? "TELAH MEMENUHI"
                    : "BELUM MEMENUHI"}
                </strong>{" "}
                syarat Kelulusan Sekolah. Selanjutnya yang bersangkutan diminta
                untuk dapat melakukan sidik jari dan penandatanganan Ijazah pada
                waktu yang akan ditentukan (Menyusul) Demikian pengumuman ini
                disampaikan atas perhatian dan kerjasamanya diucapkan
                terimakasih
              </span>
            </div>
          </div>
          <div className=" my-4 xs:my-10 flex justify-end ">
            <div className="w-1/2">
              <Image
                alt="signature"
                src={SignNature}
                width={350}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsGraduateStudents;
