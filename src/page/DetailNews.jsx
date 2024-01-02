import React from "react";
import { Link } from "react-router-dom";

const DetailNews = () => {
  return (
    <div className="flex flex-col items-center justify-center my-5 mx-4 sm:mx-auto">
      <img src="/img/ai-1.webp" alt="Porto Image" className="w-full sm:w-1/2 md:max-w-xl lg:max-w-2xl mt-10 mb-4 rounded-lg" />
      <div className="text-left max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Berita ini gg</h1>
        <p className="text-gray-600 mb-4">
          Jember, 13 Oktober 2023 - Universitas Jember dengan bangga mengundang perusahaan konsultan IT, Mascitra.com, sebagai pembicara dalam kegiatan kuliah tamu yang diselenggarakan oleh Jurusan Teknik Elektro. Kegiatan ini bertujuan
          untuk memberikan wawasan yang berharga kepada mahasiswa dalam peran teknik elektro dan peluang di era digital, serta pandangan IT dalam kontribusi AI dan pemrograman mikrokontroller. Mascitra.com adalah perusahaan konsultan IT
          yang telah dikenal luas dalam industri teknologi informasi. Dalam kuliah tamu ini, Mascitra.com akan berbagi pengetahuan tentang peran penting teknik elektro dalam perkembangan era digital yang semakin pesat. Perusahaan ini juga
          akan mengulas berbagai peluang yang tersedia di dunia teknologi informasi yang dapat dijelajahi oleh para mahasiswa Jurusan Teknik Elektro. Salah satu fokus utama dari presentasi Mascitra.com adalah kontribusi kecerdasan buatan
          (AI) dalam pengembangan teknologi. AI telah menjadi kekuatan revolusioner dalam industri IT, dan pemahaman yang mendalam tentang kontribusinya dalam berbagai bidang sangat penting. Perusahaan ini akan menjelaskan bagaimana AI
          telah mengubah cara bisnis dan industri bekerja, serta peluang yang tercipta dari perkembangan ini. Selain itu, Mascitra.com juga akan membahas peran penting pemrograman mikrokontroller dalam dunia teknik elektro. Mahasiswa akan
          mendapatkan wawasan tentang bagaimana teknologi mikrokontroller digunakan dalam berbagai aplikasi, dari otomatisasi industri hingga Internet of Things (IoT). Kegiatan ini diharapkan akan sangat bermanfaat bagi mahasiswa Jurusan
          Teknik Elektro Universitas Jember yang tengah menjalani studi mereka. Pembicaraan tentang karir di dunia teknologi informasi dan peluang di era digital akan membantu mereka merencanakan masa depan mereka dengan lebih baik. Dosen
          Jurusan Teknik Elektro, mengatakan bahwa sangat senang dan bangga dapat menggandeng Mascitra.com sebagai pembicara dalam kuliah tamu ini. Beliau yakin mahasiswa Teknik Elektro akan mendapatkan wawasan yang berharga tentang
          perkembangan terkini dalam dunia teknologi informasi. Acara ini akan menjadi sumber inspirasi untuk karir mereka di masa depan. Seluruh mahasiswa baru dan sebagian semester 3 Jurusan Teknik Elektro diundang untuk mengikuti acara
          ini. Ini adalah kesempatan langka untuk belajar dari salah satu perusahaan terkemuka dalam industri IT.
        </p>
      </div>

      <Link to="/">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 p-4 w-40 text-white font-semibold rounded-full mt-6">Back</button>
        </Link>
      </Link>
    </div>
  );
};

export default DetailNews;
