# Portfolio

## Hosting

[Portfolio](https://mrhb787.github.io/Portfolio/)

## Schema Design

### Base

```json
{
  "meta": {},
  "components": {}
}
```

### Meta

```json
{
  "meta": {
    "name": "",
    "photo": "",
    "emails": [
      {
        "work": [
          {
            "isPrimary": true,
            "email": ""
          }
        ],
        "personal": [
          {
            "isPrimary": true,
            "email": ""
          }
        ]
      }
    ],
    "socials": {
      "required": [
        {
          "platform": "",
          "url": "",
          "username": ""
        }
      ],
      "other": [
        {
          "platform": "",
          "url": "",
          "username": ""
        }
      ]
    },
    "resume": {
      "url": "",
      "other": [
        {
          "role": "",
          "url": ""
        }
      ]
    },
    "tag": "Dev"
  }
}
```

### Components Schema

- Navbar

```json
{
  "navbar": {
    "bgColor": "",
    "navTitle": "",
    "navLogo": "",
    "navLinks": ["LinkName"]
  }
}
```

- LandingPage

```json
{
  "landingPage": {
    "bgColor": "",
    "bgImage": "",
    "title": "",
    "designation": "",
    "subtitle": ""
  }
}
```

- About

```json
{
  "about": {
    "bgColor": "",
    "bgImage": "",
    "details": {
      "college": "",
      "motto": "",
      "hobbies": ""
    }
  }
}
```

- Experience

```json
{
  "experience": {
    "bgColor": "",
    "bgImage": "",
    "details": {
      "totalExperienceInMonths": "",
      "totalInternshipExperience": "",
      "totalFullTimeExperience": "",
      "totalCompaniesWorkedFor": "",
      "isStudent": false,
      "organizations": [
        {
          "organizationId": "",
          "organizationLogo": "",
          "organizationName": "",
          "isCurrentOrganization": true,
          "experience": [
            {
              "position": "",
              "employmentType": "",
              "timeline": {
                "startDate": "",
                "endDate": "",
                "isCurrent": true
              },
              "projects": [
                {
                  "title": "",
                  "details": ""
                }
              ],
              "skills": []
            }
          ]
        }
      ],
      "technologies": [
        {
          "logo": "",
          "name": "",
          "ratingOutOf100": 91
        }
      ]
    }
  }
}
```

- Education

```json
{
  "education": {
    "juniorHighSchool": {
      "schoolName": "",
      "schoolLogo": "",
      "schoolBoard": "",
      "subjects": [],
      "startYear": "",
      "endYear": "",
      "grade": ""
    },
    "highSchool": {
      "schoolName": "",
      "schoolLogo": "",
      "schoolBoard": "",
      "subjects": [],
      "startYear": "",
      "endYear": "",
      "grade": ""
    },
    "graduation": {
      "instituteName": "",
      "instituteLogo": "",
      "degree": "",
      "major": "",
      "grade": "",
      "startYear": "",
      "endYear": ""
    },
    "other": [
      {
        "instituteName": "",
        "instituteLogo": "",
        "degree": "",
        "major": "",
        "grade": "",
        "startYear": "",
        "endYear": ""
      }
    ]
  }
}
```

- Projects

```json
{
  "projects": {
    "totalProjects": "",
    "minorProjects": [
      {
        "projectTitle": "",
        "projectUrl": "",
        "details": ""
      }
    ],
    "majorProjects": [
      {
        "projectTitle": "",
        "projectUrl": "",
        "isHosted": false,
        "hostedUrl": "",
        "details": "",
        "startDate": "",
        "endDate": ""
      }
    ]
  }
}
```
