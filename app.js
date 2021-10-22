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
              name: "Parameter A: Statement of Vision, Mission, Goals and Objectives",
              content: [
                { title: "SYSTEM – INPUTS AND PROCESS" },
                {
                  name: "S.1 – The institution has system of determining the Vision and Mission",
                  link: "",
                },
                {
                  name: "S.2 – The vision clearly reflects what the institution hopes to become in the future",
                  link: "",
                },
                {
                  name: "S.3 – The vision clearly reflects what the institution's legal and other statutory mandates.",
                  link: "",
                },
                {
                  name: "S.4 – The Goals of the College/Academic Unit are consistent with the Mission of the Institution.",
                  link: "",
                },
                {
                  name: "S.5 – The Objectives of the program have the expected outcomes in terms of competencies (skills and knowledge), values and other attributes of the graduates which include the development of: ",
                  link: "",
                  subContent: [
                    {
                      name: "S.5.1 – technical/pedagogical skills;",
                      link: "", 
                    },
                    {
                      name: "S.5.2 – research and extension capabilities;",
                      link: "", 
                    },
                    {
                      name: "S.5.3 – student's own ideas, desirable attitudes and personal discipline;",
                      link: "", 
                    },
                    {
                      name: "S.5.4 – moral character;",
                      link: "", 
                    },
                    {
                      name: "S.5.5 – critical analytical, problem solving and other higher order thinking skills; and;",
                      link: "", 
                    },
                    {
                      name: "S.5.6 – aesthetic and cultural values.",
                      link: "", 
                    },
                  ]
                },
                { title: "IMPLEMENTATION" },
                {
                  name: "I.1",
                  link: "",
                },
                {
                  name: "I.2",
                  link: "",
                },
                {
                  name: "I.3",
                  link: "",
                },
                { title: "OUTCOME/S" },
                {
                  name: "O.1",
                  link: "",
                },
              ],
            },
            {
              id: 2,
              name: "Parameter B: Dissemination and Acceptability",
              content: [
                { title: "SYSTEM – INPUTS AND PROCESS" },
                {
                  name: "S.1 – ",
                  link: "",
                },
                {
                  name: "S.2 – ",
                  link: "",
                },
                { title: "IMPLEMENTATION" },
                {
                  name: "I.1 – ",
                  link: "",
                },
                {
                  name: "I.2 – ",
                  link: "",
                  subContent: [
                    {
                      name: "I.2.1 – ",
                      link: "",
                    },
                    {
                      name: "I.2.2 – ",
                      link: "",
                    },
                    {
                      name: "I.2.3 – ",
                      link: "",
                    },
                  ]
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
              id: 1,
              name: "Parameter A: Student Services Program (SSP)",
              content: [
                { title: "SYSTEM – INPUTS AND PROCESS" },
                {
                  name: "S.1 – The institution has Student Services Program.",
                  link: "",
                  subContent: [
                    {
                      name: 'S.1.2',
                      link: ''
                    },
                    {
                      name: 'S.1.3',
                      link: ''
                    }
                  ]
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
              content: [
                { title: 'SYSTEM – INPUTS AND PROCESS' },
                {
                  name: 'S.1',
                  link: ''
                }
              ]
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
      areasByPPP: [
        {
          name: 'AREA I',
          link: ''
        },
        {
          name: 'AREA II',
          link: ''
        },
        {
          name: 'AREA III',
          link: ''
        },
        {
          name: 'AREA IV',
          link: ''
        },
        {
          name: 'AREA V',
          link: ''
        },
        {
          name: 'AREA VI',
          link: ''
        },
        {
          name: 'AREA VII',
          link: ''
        },
        {
          name: 'AREA VIII',
          link: ''
        },
        {
          name: 'AREA IX',
          link: ''
        },
        {
          name: 'AREA X',
          link: ''
        },
      ],
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
      (this.toggle = !this.toggle), (this.parameter_id = id);
    },
  },
});

app.mount("#app");

