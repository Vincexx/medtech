const app = Vue.createApp({
  data() {
    return {
      areasbyDocuments: [
        {
          id: 1,
          name: "AREA I - VISION, MISSION, GOALS AND OBJECTIVES",
          areaI: false,
          parameters: [
            {
              id: 1,
              name: "Parameter A: Student Services Program (SSP)",
              title: "SYSTEM – INPUTS AND PROCESS",
              content: [
                {
                  name: "S.1 – The institution has Student Services Program.",
                  link: "",
                },
                {
                  name: "S.2 – The institution has Student Services Program.",
                  link: "",
                },
              ],
            },
            {
                id: 2,
                name: "Parameter B: Student Services Program (SSP)",
                title: "SYSTEM – INPUTS AND PROCESS",
                content: [
                  {
                    name: "S.1 – Thess institution has Student Services Program.",
                    link: "",
                  },
                  {
                    name: "S.2 – Thess institution has Student Services Program.",
                    link: "",
                  },
                ],
              },
          ],
        },
        {
          id: 2,
          name: "AREA II - FACULTY",
          areaII: false,
          parameters: [
            {
              name: "Parameter B: Student Services Program (SSP)",
              title: "SYSTEM – INPUTS AND PROCESS",
              content: [
                {
                  name: "S.1 – The institution has Student Services Program.",
                  link: "",
                },
                {
                  name: "S.2 – The institution has Student Services Program.",
                  link: "",
                },
              ],
            },
            {
              name: "Parameter A: Student Services Program (SSP)",
            },
          ],
        },
        {
          id: 3,
          name: "AREA III - CURRICULUM AND INSTRUCTIONS",
          areaIII: false,
        },
        {
          id: 4,
          name: "AREA IV - SUPPORT TO STUDENTS",
          areaIV: false,
        },
        {
          id: 5,
          name: "AREA V - RESEARCH",
          areaV: false,
        },
        {
          id: 6,
          name: "AREA VI - EXTENSION AND COMMUNITY INVOLVEMENT",
          areaVI: false,
        },
        {
          id: 7,
          name: "AREA VII - LIBRARY",
          areaVII: false,
        },
        {
          id: 8,
          name: "AREA VIII - PHYSICAL PLANT AND FACILITIES",
          areaVIII: false,
        },
        {
          id: 9,
          name: "AREA IX - LABORATORIES",
          areaIX: false,
        },
        {
          id: 10,
          name: "AREA X - ADMINISTRATION",
          areaX: false,
        },
      ],
      id: 1,
      showDocuments: true,
      toggle: false,
      parameter_id: null,
    };
  },
  methods: {
    showSection(param, id) {
      this.areasbyDocuments.areaI = false;
      this.areasbyDocuments.areaII = false;
      this.areasbyDocuments.areaIII = false;
      this.areasbyDocuments.areaIV = false;
      this.areasbyDocuments.areaV = false;
      this.areasbyDocuments.areaVI = false;
      this.areasbyDocuments.areaVII = false;
      this.areasbyDocuments.areaVIII = false;
      this.areasbyDocuments.areaIX = false;
      this.areasbyDocuments.areaX = false;
      this.areasbyDocuments[param[2]] = true;
      this.id = id;
      this.showDocuments = true;
    },
    showParameter(id) {
        this.toggle = !this.toggle,
        this.parameter_id = id
    }
  },
});

app.mount("#app");
