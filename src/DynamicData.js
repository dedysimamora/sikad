import Constant from "./constant";

let DynamicData = {};

DynamicData[Constant.SIKAD] = {
  title: "sikad",
  subTitle:
    "Sistem Kearsipan Dinas Lingkungan Hidup Dan Kehutanan Provinsi Jawa Tengah",
  logo: "/images/logo-dinas.png",
  tableSearchKey: "uraianInformasi",
  color: {
    mainColor: "#001529",
    mainColorRGBA: "FF001529",
    secondColor: "#000C17",
    thirdColor: "#FFFFFF",
    thirdColorRGBA: "FFFFFFFF",
    chartColor: [
      "#001529",
      "#01264a",
      "#02396f",
      "#0059af",
      "#007cef",
      "#1890ff",
    ],
  },
  menu: [
    {
      title: "Menu Utama",
      pathName: "/sikad/dashboard",
      icon: "bar-chart",
      childMenu: [],
    },
    {
      title: "Arsip",
      pathName: "/sikad/arsip",
      icon: "database",
      childMenu: [
        {
          title: "Personal File",
          pathName: "/sikad/arsip/personal-file",
          icon: "file-text",
          childMenu: [],
        },
        {
          title: "Foto",
          pathName: "/sikad/arsip/foto",
          icon: "picture",
          childMenu: [],
        },
        {
          title: "Video",
          pathName: "/sikad/arsip/video",
          icon: "play-square",
          childMenu: [],
        },
        {
          title: "Surat Masuk",
          pathName: "/sikad/arsip/surat-masuk",
          icon: "file-text",
          childMenu: [],
        },
        {
          title: "Surat Keluar",
          pathName: "/sikad/arsip/surat-keluar",
          icon: "file-text",
          childMenu: [],
        },
        {
          title: "Kartografi",
          pathName: "/sikad/arsip/kartografi",
          icon: "file-text",
          childMenu: [],
        },
      ],
    },
    {
      title: "Tambah Data",
      pathName: "/sikad/tambah-data",
      icon: "file-add",
      childMenu: [],
    },
  ],
  column: [
    {
      title: "No",
      dataIndex: "noDefinitif",
      align: "center",
      sorter: (a, b) => a.noDefinitif - b.noDefinitif,
      width: "5%",
    },
    {
      title: "Kode Klasifikasi",
      dataIndex: "noKlasifikasi",
      align: "center",
      render: (a) =>
        a.toLocaleString("de-DE", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
      sorter: (a, b) => a.noKlasifikasi - b.noKlasifikasi,
      width: "10%",
    },
    {
      title: "Indeks",
      dataIndex: "indeks",
      align: "center",
      width: "10%",
    },
    {
      title: "Uraian Informasi",
      dataIndex: "uraianInformasi",
      align: "center",
      width: "15%",
    },
    {
      title: "Lokasi",
      dataIndex: "lokasiTempat",
      align: "center",
      width: "7%",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggalSimpan",
      align: "center",
      width: "8%",
    },
  ],
  generateExcelData: (data) => {
    return data.map((e) => ({
      No: e.noDefinitif,
      "Kode Klarifikasi": e.noKlasifikasi,
      Indeks: e.indeks,
      "Hak Cipta": e.hakCipta,
      "Uraian Informasi": e.uraianInformasi,
      Lokasi: e.lokasiTempat,
      "Tempat Simpan": e.tempatSimpan,
      Waktu: e.tanggalSimpan,
      "Ukuran ": `${e.panjangFoto} Cm X ${e.lebarFoto} Cm`,
      Kualitas: e.kualitasFoto ? "Baik" : "Buruk",
      Keterangan: e.keterangan,
    }));
  },
  excelColumn: (colomStyle) => {
    return [
      { title: "No", style: colomStyle, width: { wch: 4 } },
      { title: "Kode Klasifikasi", style: colomStyle, width: { wch: 14 } },
      { title: "Indeks", style: colomStyle, width: { wch: 20 } },
      { title: "Hak Cipta", style: colomStyle, width: { wch: 15 } },
      { title: "Uraian Informasi", style: colomStyle, width: { wch: 50 } },
      { title: "Lokasi", style: colomStyle, width: { wch: 15 } },
      { title: "Tempat Simpan", style: colomStyle, width: { wch: 15 } },
      { title: "Waktu", style: colomStyle, width: { wch: 12 } },
      { title: "Ukuran ", style: colomStyle, width: { wch: 15 } },
      { title: "Kualitas", style: colomStyle, width: { wch: 7 } },
      { title: "Keterangan", style: colomStyle, width: { wch: 50 } },
    ];
  },
};

DynamicData[Constant.SEKDA] = {
  title: "sekda",
  subTitle: "Sistem Kearsipan Dinas Arsip dan Perpustakaan Kota Semarang",
  logo: "/images/semarang.png",
  tableSearchKey: "uraianInformasi",
  color: {
    mainColor: "#BBBBBB",
    mainColorRGBA: "FFBBBBBB",
    secondColor: "#AAAAAA",
    thirdColor: "#222222",
    thirdColorRGBA: "FF222222",
    chartColor: [
      "#3D3D3D",
      "#5C5C5C",
      "#5B5B5B",
      "#787878",
      "#959595",
      "#B1B1B1",
    ],
  },
  menu: [
    {
      title: "Menu Utama",
      pathName: "/sekda/dashboard",
      icon: "bar-chart",
      childMenu: [],
    },
    {
      title: "Arsip",
      pathName: "/sekda/arsip",
      icon: "database",
      childMenu: [
        {
          title: "Arsip Aktif",
          pathName: "/sekda/arsip/arsip-aktif",
          icon: "file-text",
          childMenu: [],
        },
        {
          title: "Arsip Inaktif",
          pathName: "/sekda/arsip/arsip-inaktif",
          icon: "file-text",
          childMenu: [],
        },
        {
          title: "Arsip Statis",
          pathName: "/sekda/arsip/arsip-statis",
          icon: "file-text",
          childMenu: [],
        },
      ],
    },
    {
      title: "Tambah Data",
      pathName: "/sekda/tambah-data",
      icon: "file-add",
      childMenu: [],
    },
  ],
  column: [
    {
      title: "No",
      dataIndex: "noDefinitif",
      align: "center",
      sorter: (a, b) => a.noDefinitif - b.noDefinitif,
      width: "5%",
    },
    {
      title: "Kode Klasifikasi",
      dataIndex: "noKlasifikasi",
      align: "center",
      render: (a) =>
        a.toLocaleString("de-DE", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
      sorter: (a, b) => a.noKlasifikasi - b.noKlasifikasi,
      width: "10%",
    },
    {
      title: "Indeks",
      dataIndex: "indeks",
      align: "center",
      width: "7%",
    },
    {
      title: "Uraian Informasi",
      dataIndex: "uraianInformasi",
      align: "center",
      width: "20%",
    },
    {
      title: "No Boks",
      dataIndex: "noBoks",
      align: "center",
      width: "5%",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggalArsip",
      align: "center",
      width: "10%",
    },
  ],
  generateExcelData: (data) => {
    return data.map((e) => ({
      No: e.noDefinitif,
      "Kode Klarifikasi": e.noKlasifikasi,
      Indeks: e.indeks,
      "Uraian Informasi": e.uraianInformasi,
      "No Boks": e.noBoks,
      Tanggal: e.tanggalArsip,
    }));
  },
  excelColumn: (colomStyle) => {
    return [
      { title: "No", style: colomStyle, width: { wch: 4 } },
      { title: "Kode Klasifikasi", style: colomStyle, width: { wch: 14 } },
      { title: "Indeks", style: colomStyle, width: { wch: 15 } },
      { title: "Uraian Informasi", style: colomStyle, width: { wch: 50 } },
      { title: "No Boks", style: colomStyle, width: { wch: 10 } },
      { title: "Tanggal", style: colomStyle, width: { wch: 12 } },
    ];
  },
  dataInputObject: [
    {
      title: "No Klasifikasi",
      placeHolder: "Masukkan No Klasifikasi",
      variableName: "noKlasifikasi",
      type: "number",
      maxLength: 5,
      required: true,
      spanSize: 8,
    },
    {
      title: "Tanggal Arsip",
      placeHolder: "Masukkan Tanggal Arsip",
      variableName: "tanggalArsip",
      type: "date",
      maxLength: 15,
      required: true,
      spanSize: 8,
    },
    {
      title: "Tipe Arsip",
      placeHolder: "Pilih Tipe Arsip",
      variableName: "tipeArsip",
      type: "select",
      maxLength: 15,
      required: true,
      spanSize: 8,
      suggestion: [
        {
          value: "arsipAktif",
          label: "Arsip Aktif",
        },
        {
          value: "arsipInaktif",
          label: "Arsip Inaktif",
        },
        {
          value: "arsipStatis",
          label: "Arsip Statis",
        },
      ],
    },
    {
      title: "No Boks",
      placeHolder: "Masukkan No Boks",
      variableName: "noBoks",
      type: "number",
      maxLength: 5,
      required: true,
      spanSize: 12,
    },
    {
      title: "Retensi",
      placeHolder: "Masukkan Retensi",
      variableName: "retensi",
      type: "text",
      maxLength: 5,
      required: true,
      spanSize: 12,
    },
    {
      title: "Keterangan",
      placeHolder: "Masukkan Keterangan",
      variableName: "keterangan",
      type: "text",
      maxLength: 25,
      required: true,
      spanSize: 12,
    },
    {
      title: "Tempat Simpan",
      placeHolder: "Masukkan Tempat Simpan",
      variableName: "tempatSimpan",
      type: "text",
      maxLength: 25,
      required: true,
      spanSize: 12,
    },
    {
      title: "Indeks",
      placeHolder: "Masukkan Indeks",
      variableName: "indeks",
      type: "text",
      maxLength: 25,
      required: true,
      spanSize: 24,
    },
    {
      title: "Uraian Informasi",
      placeHolder: "Masukkan Uraian Informasi",
      variableName: "uraianInformasi",
      type: "textArea",
      maxLength: 100,
      required: true,
      spanSize: 24,
    },
  ],
};

DynamicData[Constant.SIAKUM] = {
  title: "siakum",
  subTitle: "Sistem Arsip Dinas Koperasi dan Usaha Mikro",
  logo: "/images/semarang.png",
  tableSearchKey: "keterangan",
  color: {
    mainColor: "#2E856E",
    mainColorRGBA: "FF2E856E",
    secondColor: "#006A4E",
    thirdColor: "#FFFFFF",
    thirdColorRGBA: "FFFFFFFF",
    chartColor: [
      "#006A4E",
      "#61B567",
      "#2E856E",
      "#5CA08E",
      "#8ABAAE",
      "#B8D5CD",
    ],
  },
  menu: [
    {
      title: "Menu Utama",
      pathName: "/siakum/dashboard",
      icon: "bar-chart",
      childMenu: [],
    },
    {
      title: "Arsip",
      pathName: "/siakum/arsip",
      icon: "database",
      childMenu: [
        {
          title: "Surat Masuk",
          pathName: "/siakum/arsip/surat-masuk",
          icon: "file-text",
          childMenu: [],
        },
        {
          title: "Surat Keluar",
          pathName: "/siakum/arsip/surat-keluar",
          icon: "file-text",
          childMenu: [],
        },
      ],
    },
    {
      title: "Tambah Data",
      pathName: "/siakum/tambah-data",
      icon: "file-add",
      childMenu: [],
    },
  ],
  column: [
    {
      title: "No Agenda",
      dataIndex: "noAgenda",
      align: "center",
      sorter: (a, b) => a.noDefinitif - b.noDefinitif,
      width: "7%",
    },
    {
      title: "No Surat",
      dataIndex: "noSurat",
      align: "center",
      sorter: (a, b) => a.noDefinitif - b.noDefinitif,
      width: "7%",
    },
    {
      title: "Tujuan Surat",
      dataIndex: "tujuanSurat",
      align: "center",
      width: "8%",
    },
    {
      title: "Keterangan / Bidang",
      dataIndex: "keterangan",
      align: "center",
      width: "15%",
    },
    {
      title: "Kode Surat",
      dataIndex: "kodeSurat",
      align: "center",
      width: "7%",
    },
    {
      title: "Tanggal Surat",
      dataIndex: "tanggalSurat",
      align: "center",
      width: "12%",
    },
    {
      title: "Perihal",
      dataIndex: "perihal",
      align: "center",
      width: "10%",
    },
  ],
  generateExcelData: (data) => {
    return data.map((e) => ({
      "No Agenda": e.noAgenda,
      "No Surat": e.noSurat,
      "Tujuan Surat": e.tujuanSurat,
      "Keterangan / Bidang": e.keterangan,
      "Kode Surat": e.kodeSurat,
      "Tanggal Surat": e.tanggalSurat,
      Perihal: e.perihal,
    }));
  },
  excelColumn: (colomStyle) => {
    return [
      { title: "No Agenda", style: colomStyle, width: { wch: 10 } },
      { title: "No Surat", style: colomStyle, width: { wch: 10 } },
      { title: "Tujuan Surat", style: colomStyle, width: { wch: 15 } },
      { title: "Keterangan / Bidang", style: colomStyle, width: { wch: 50 } },
      { title: "Kode Surat", style: colomStyle, width: { wch: 20 } },
      { title: "Tanggal Surat", style: colomStyle, width: { wch: 13 } },
      { title: "Perihal", style: colomStyle, width: { wch: 20 } },
    ];
  },
  dataInputObject: [
    {
      title: "No Agenda",
      placeHolder: "Masukkan No Agenda",
      variableName: "noAgenda",
      type: "number",
      maxLength: 5,
      required: true,
      spanSize: 8,
    },

    {
      title: "Tanggal Surat",
      placeHolder: "Masukkan Tanggal Surat",
      variableName: "tanggalSurat",
      type: "date",
      maxLength: 15,
      required: true,
      spanSize: 8,
    },
    {
      title: "Tipe Arsip",
      placeHolder: "Pilih Tipe Arsip",
      variableName: "tipeArsip",
      type: "select",
      maxLength: 15,
      required: true,
      spanSize: 8,
      suggestion: [
        {
          value: "suratMasuk",
          label: "Surat Masuk",
        },
        {
          value: "suratKeluar",
          label: "SuratKeluar",
        },
      ],
    },
    {
      title: "No Surat",
      placeHolder: "Masukkan No Surat",
      variableName: "noSurat",
      type: "number",
      maxLength: 10,
      required: true,
      spanSize: 12,
    },
    {
      title: "Kode Surat",
      placeHolder: "Masukkan Kode Surat",
      variableName: "kodeSurat",
      type: "text",
      maxLength: 15,
      required: true,
      spanSize: 12,
    },
    {
      title: "Tujuan Surat",
      placeHolder: "Masukkan Tujuan Surat",
      variableName: "tujuanSurat",
      type: "text",
      maxLength: 15,
      required: true,
      spanSize: 12,
    },
    {
      title: "Perihal",
      placeHolder: "Masukkan Perihal",
      variableName: "perihal",
      type: "text",
      maxLength: 50,
      required: true,
      spanSize: 12,
    },
    {
      title: "Keterangan / Bidang",
      placeHolder: "Masukkan Keterangan / Bidang",
      variableName: "keterangan",
      type: "textArea",
      maxLength: 100,
      required: true,
      spanSize: 24,
    },
  ],
};

export default DynamicData;
