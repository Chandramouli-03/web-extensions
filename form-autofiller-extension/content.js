const autofillFields = {
    "company-name": {
      "type": "input",
      "defaultValue": "TechCorp Solutions",
      "newName": "company-name"
    },
    "company-industry": {
      "type": "input",
      "defaultValue": "Information Technology"
    },
    "company-location": {
      "type": "select",
      "defaultValue": ["Bangalore", "Hyderabad"]
    },
    "copmany-website-url": {
      "type": "input",
      "defaultValue": "https://www.techcorpsolutions.com"
    },
    "about-company": {
      "type": "ckeditor",
      "defaultValue": "TechCorp Solutions is a leading technology company specializing in software development and digital transformation. With over 15 years of experience, we have served clients across various industries, helping them achieve their business goals through innovative technology solutions. Our team of 500+ professionals works collaboratively to deliver excellence in every project."
    },
    "company-logo": {
      "type": "file",
      "defaultValue": null
    },
    "role-name": {
      "type": "input",
      "defaultValue": "Senior Full Stack Developer"
    },
    "number-of-openings": {
      "type": "input",
      "defaultValue": "5"
    },
    "job-description": {
      "type": "ckeditor",
      "defaultValue": "We are looking for a Senior Full Stack Developer to join our dynamic team. The ideal candidate will be responsible for developing and maintaining web applications, working with both front-end and back-end technologies. You will collaborate with cross-functional teams to define, design, and ship new features while ensuring the best possible performance, quality, and responsiveness of applications."
    },
    "qualifications": {
      "type": "ckeditor",
      "defaultValue": "• Bachelor's degree in Computer Science or related field\n• 5+ years of experience in full-stack development\n• Strong proficiency in JavaScript, TypeScript, and modern frameworks\n• Experience with React.js and Node.js\n• Knowledge of database systems (SQL and NoSQL)\n• Familiarity with cloud platforms (AWS/Azure)\n• Excellent problem-solving skills and attention to detail"
    },
    "benefits-and-compensations": {
      "type": "ckeditor",
      "defaultValue": "• Competitive salary package\n• Health insurance coverage\n• Flexible work hours\n• Remote work options\n• Professional development opportunities\n• Performance bonuses\n• Paid time off and holidays\n• Employee stock options"
    },
    "job-notes": {
      "type": "ckeditor",
      "defaultValue": "• Immediate joiners preferred\n• Must be available for occasional travel\n• Willingness to work in different time zones\n• Strong communication skills required"
    },
    "work-experience-min": {
      "type": "input",
      "defaultValue": "5"
    },
    "work-experience-max": {
      "type": "input",
      "defaultValue": "8"
    },
    "job-type": {
      "type": "select",
      "defaultValue": "Full-time"
    },
    "Internship_Duration_In_Months": {
      "type": "input",
      "defaultValue": "6"
    },
    "Stipend": {
      "type": "input",
      "defaultValue": "25000"
    },
    "min_CTC": {
      "type": "input",
      "defaultValue": "1500000"
    },
    "max_CTC": {
      "type": "input",
      "defaultValue": "2000000"
    },
    "CTC": {
      "type": "input",
      "defaultValue": "15-20 LPA"
    },
    "No_of_Profile_Requirement": {
      "type": "input",
      "defaultValue": "10"
    },
    "skill-list": {
      "type": "select",
      "defaultValue": ["JavaScript", "React", "Node.js", "MongoDB", "AWS"]
    },
    "work-nature": {
      "type": "select",
      "defaultValue": "Hybrid"
    },
    "test-link": {
      "type": "input",
      "defaultValue": "techcorp-fullstack-test"
    },
    "programming-cutt-off-percentage": {
      "type": "input",
      "defaultValue": "70"
    },
    "number-of-attempts": {
      "type": "input",
      "defaultValue": "2"
    },
    "job-post-period": {
      "type": "input",
      "defaultValue": "2024-03-15"
    },
    "Requirement_Type": {
      "type": "select",
      "defaultValue": "New Company"
    },
    "Product": {
      "type": "select",
      "defaultValue": ["Web Development", "Cloud Services"]
    },
    "POC_Name": {
      "type": "input",
      "defaultValue": "John Smith"
    },
    "POC_Email": {
      "type": "input",
      "defaultValue": "john.smith@techcorpsolutions.com"
    },
    "POC_Mobile": {
      "type": "input",
      "defaultValue": "9876543210"
    },
    "Interview_stage_1": {
      "type": "select",
      "defaultValue": "Online assessment"
    },
    "Interview_Stage_2": {
      "type": "select",
      "defaultValue": "Tech Interview"
    },
    "Interview_Stage_3": {
      "type": "select",
      "defaultValue": "HR screening"
    },
    "Interview_Stage_4": {
      "type": "select",
      "defaultValue": "Culture fit"
    },
    "Virtual_F2F_interview": {
      "type": "select",
      "defaultValue": "Virtual"
    },
    "No_of_rounds_of_Interview": {
      "type": "input",
      "defaultValue": "4"
    },
    "Additional_Info_for_Skill_requirement": {
      "type": "input",
      "defaultValue": "Experience with microservices architecture preferred"
    },
    "Requirement_passout_year": {
      "type": "select",
      "defaultValue": ["2022", "2023", "2024"]
    },
    "Bond": {
      "type": "select",
      "defaultValue": "No"
    },
    "Career_Fair": {
      "type": "select",
      "defaultValue": "Yes"
    },
    "MOU_signed": {
      "type": "select",
      "defaultValue": "Yes"
    },
    "account_manager_email": {
      "type": "input",
      "defaultValue": "sarah.johnson@techcorpsolutions.com"
    },
    "Delivery_Manager_Email": {
      "type": "input",
      "defaultValue": "mike.wilson@techcorpsolutions.com"
    },
    "Direct_Interview": {
      "type": "select",
      "defaultValue": "No"
    }
  };
  
  function fillForm() {
    for (const [name, field] of Object.entries(autofillFields)) {
      const { type, defaultValue, newName } = field;
  
      switch (type) {
        case "input":
          const input = document.querySelector(`[name="${newName || name}"]`);
          if (input) {
            input.value = defaultValue;
            input.dispatchEvent(new Event("input", { bubbles: true }));
          }
          break;
  
        case "select":
          const select = document.querySelector(`[name="${name}"]`);
          if (select) {
            if (Array.isArray(defaultValue)) {
              [...select.options].forEach(option => {
                option.selected = defaultValue.includes(option.value);
              });
            } else {
              select.value = defaultValue;
            }
            select.dispatchEvent(new Event("change", { bubbles: true }));
          }
          break;
  
        case "ckeditor":
          const ckeditorEl = document.querySelector(`[name="${name}"]`);
          if (ckeditorEl && window.CKEDITOR && CKEDITOR.instances[name]) {
            CKEDITOR.instances[name].setData(defaultValue);
          } else {
            // fallback if not initialized
            const fallback = document.querySelector(`[name="${name}"]`);
            if (fallback) fallback.value = defaultValue;
          }
          break;
  
        case "file":
          console.warn(`Skipping file input '${name}' — cannot set file inputs with JavaScript.`);
          break;
  
        default:
          console.warn(`Unknown field type for ${name}`);
      }
    }
  }
  
  // Run when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fillForm);
  } else {
    fillForm();
  }
  