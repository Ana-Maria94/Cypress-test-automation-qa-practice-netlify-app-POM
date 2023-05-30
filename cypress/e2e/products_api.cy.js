/// <reference types="cypress" />

describe("table test suite", () => {
    it("table scenario - wait for API", () => {
      // cy.wait(3000);
      cy.intercept({
        method: "GET",
        url: "**/api/*",
      }).as("getUsersAPI");
  
      cy.get("#intercept-api").click();
  
      cy.wait("@getUsersAPI").its("response.statusCode").should("eq", 200);
      cy.contains("Avatar").should("be.visible");
    });
  
    it("table scenario - mock api response", () => {
      // cy.wait(3000);
      cy.intercept(
        {
          method: "GET",
          url: "**/api/*",
        },
        {
          body: {
            results: [
              {
                gender: "female",
                name: {
                  title: "Mrs",
                  first: "Ana-Maria",
                  last: "Mihai",
                },
                location: {
                  street: {
                    number: 5259,
                    name: "Myrerskogveien",
                  },
                  city: "Svarstad",
                  state: "Hordaland",
                  country: "Norway",
                  postcode: "2321",
                  coordinates: {
                    latitude: "41.7718",
                    longitude: "42.0718",
                  },
                  timezone: {
                    offset: "+9:30",
                    description: "Adelaide, Darwin",
                  },
                },
                email: "frida.synnevag@example.com",
                login: {
                  uuid: "ca4ee441-78bf-4eeb-a0d4-1835b51cda29",
                  username: "lazyleopard546",
                  password: "hiking",
                  salt: "vYx8OAzI",
                  md5: "2bcb26377aaa037accfd54498a56879c",
                  sha1: "14c799adf555e5b0900e7bfe6100e81f6b6e902f",
                  sha256:
                    "f457feab814a70afd817659f81188365461bbb2cb416a7c2996b4139d1eaf3d6",
                },
                dob: {
                  date: "1979-08-17T17:17:00.677Z",
                  age: 43,
                },
                registered: {
                  date: "2017-09-09T11:05:40.905Z",
                  age: 5,
                },
                phone: "37073507",
                cell: "47050302",
                id: {
                  name: "FN",
                  value: "17087922642",
                },
                picture: {
                  large: "https://randomuser.me/api/portraits/women/4.jpg",
                  medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
                  thumbnail:
                    "https://randomuser.me/api/portraits/thumb/women/4.jpg",
                },
                nat: "NO",
              },
            ],
          },
        }
      ).as("getUsersAPI");
  
      cy.get("#intercept-api").click();
  
      cy.wait("@getUsersAPI").its("response.statusCode").should("eq", 200);
      cy.contains("Avatar").should("be.visible");
    });
  });
  
