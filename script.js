pannellum.viewer('panorama', {
    "default": {
        "firstScene": "scene1",
        "autoLoad": false,
        "sceneFadeDuration": 1000
    },
    "scenes": {
        "scene1": {
            "type": "equirectangular",
            "panorama": "hh.jpg", 
            "hotSpots": [
                {
                    "pitch": 10,  
                    "yaw": 0,   
                    "type": "scene",
                    "text": "WELCOME TO SWAMI RAMA HIMALIYAN UNIVERSITY",  
                    "sceneId": "scene2"      
                },
                {
                    "pitch": 5,  
                    "yaw": 100,   
                    "type": "info",
                    "text": " MEDICAL SHOPE S",  
                    "sceneId": "scene2"      
                },
                {
                    "pitch": 2,  
                    "yaw": -50,   
                    "type": "info",
                    "text": "  ADARASHNAGAR    ROAD" ,  
              
                }
            ]
        },
        "scene2": {
            "type": "equirectangular",
            "panorama": "sh.jpg",  
            "hotSpots": [
                {
                    "pitch": 7,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Go back to Scene 1",
                    "sceneId": "scene1"
                },
                {
                    "pitch": 3,
                    "yaw": 3,
                    "type": "scene",
                    "text": "YOU HAVE ENTERD IN SRHU",
                    "sceneId": "scene3"
                }
            ]
        },
        "scene3": {
            "type": "equirectangular",
            "panorama": "img3.jpg",
            "hotSpots": [
                {
                    "pitch": 10,
                    "yaw": 1,
                    "type": "scene",
                    "text": "MAIN CHECKING GATE OF SRHU (TRIPLING NOT ALLOWED ps: only for students",
                    "sceneId": "scene4"
                },
                {
                    "pitch": 10,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Back to scene 2",
                    "sceneId": "scene2"
                },
                {
                    "pitch": 4,
                    "yaw":-47,
                    "type":"info",
                    "text":" HEYY!!!  BACHO  TRIPLING  KOI  NAHI  KAREGA",
                },
            ]
        },
        "scene4": {
            "type": "equirectangular",
            "panorama": "img4.jpg",
            "hotSpots": [
                {
                "pitch": 7,
                "yaw": -1,
                "type": "scene",
                "text": "FLAG CHOWK   ",
                "sceneId": "scene5"
            
            },
            {
                "pitch": 7,
                "yaw": -22,
                "type": "info",
                "text": "  WALL OF HEROS",
            },
                {
                    "pitch": 7,
                    "yaw": 179,
                    "type": "scene",
                    "text": "Go back to Scene 3",
                    "sceneId": "scene3"
                },
                
            ]
        },
        "scene0":{
            "type":"equirectangular",
            "panorama": "HOSP.jpg",
            "hotSpots" :[
                {
                "pitch":-5,
                "yaw":0,
                "type":"scene",
                "text":"HIMALIYAN HOSPITAL & HIMALAYAN SCHOOL OF MEDICAL SCIENCE COLLAGE ",
                "sceneId":"scene6"
            },
            {
                "pitch": 7,
                "yaw": -57,
                "type": "info",
                "text": "EMERGENCY",
            
            },
            
        ]
        },

        "scene5": {
            "type": "equirectangular",
            "panorama": "img5.jpg",
            "hotSpots": [
                {
                    "pitch": 7,
                    "yaw": 1,
                    "type": "scene",
                    "text": "HIMALAYAN SCHOOL OF SCIENCE AND TECHNOLOGY",
                    "sceneId": "scene7"
                },
                {
                    "pitch": 7,
                    "yaw": -35,
                    "type": "info",
                    "text": "  WALL OF HEROS",
                },
                {
                    "pitch": 7,
                    "yaw": 160,
                    "type": "scene",
                    "text": "Go back to Scene 4",
                    "sceneId": "scene4"
                },
                {
                    "pitch": 7,
                    "yaw": 50,
                    "type": "scene",
                    "text": "HIMALAYAN HOSPITAL AND MEDICAL COLLAGE",
                    "sceneId": "scene5.1"
                }
            ]
        },
        "scene5.1": {
            "type": "equirectangular",
            "panorama": "img5.1.jpg",
            "hotSpots": [
                {
                    "pitch": 7,
                    "yaw": 1,
                    "type": "scene",
                    "text": "HIMALAYAN HOSPITAL AND MEDICAL COLLAGE",
                    "sceneId": "scene0"
                },
                {
                    "pitch":-6,
                    "yaw": -75,
                    "type": "scene",
                    "text": "HIMALAYAN SCHOOL OF SCIENCE AND TECHNOLOGY",
                    "sceneId": "scene7"
                },
                {
                    "pitch": 7,
                    "yaw": 50,
                    "type": "info",
                    "text": "  WALL OF HEROS",
                },
                {
                    "pitch": 7,
                    "yaw": 120,
                    "type": "scene",
                    "text": "Go back to the main gate",
                    "sceneId": "scene4"
                },
                {
                    "pitch": -1.4,
                    "yaw": 103,
                    "type": "info",
                    "text": "Hello......"
                },
                {
                    "pitch": 7,
                    "yaw": 50,
                    "type": "info",
                    "text": "HIMALAYAN HOSPITAL Parking Area",
                }
            ]
        },
        "scene6": {
            "type": "equirectangular",
            "panorama": "img6.jpg",
            "hotSpots": [
                {
                    "pitch": 7,
                    "yaw": -100,
                    "type": "scene",
                    "text": "Go back to FLAG CHOWK",
                    "sceneId": "scene5"
                },
                {
                    "pitch": 7,
                    "yaw": 0,
                    "type": "info",
                    "text": "HIMALAYAN HOSPITAL ",
                    "sceneId": "scene5"
                },
                {
                    "pitch": 7,
                    "yaw": -170,
                    "type": "info",
                    "text": "HIMALAYAN SCHOOL OF MEDICAL SCIENCE ",
            
                }
            ]
        },
        "scene7": {
            "type": "equirectangular",
            "panorama": "img7.jpg",
            "hotSpots":[
                {
                    
                    "pitch": 7,
                    "yaw": -100,
                    "type": "scene",
                    "text": "Go back to Scene 5",
                    "sceneId": "scene5"
                
                },
                {
                    
                    "pitch": 7,
                    "yaw": 360,
                    "type": "scene",
                    "text": "CENCER RESEARCH INSTITUDE || ENGINEERING COLLAGE",
                    "sceneId": "scene8"
                
                }

            ]
                  
                
            
        },
        "scene8":{
            "type":"equirectangular",
            "panorama":"img8.jpg",
            "hotSpots":[
                { 
                    "pitch": 7,
                    "yaw": 360,
                    "type": "scene",
                    "text": "CENTRAL LIBRARY SRHU",
                    "sceneId": "scene9"
                
                }


                
            ]
        },
        "scene9":{
            "type": "equirectangular",
            "panorama":"img9.jpg",
            
            "hotSpots":[{ 
                    "pitch": 7,
                    "yaw": 300,
                    "type": "scene",
                    "text": "zero point",
                    "sceneId": "scene10"
                
                },
                {
                    "pitch": 7,
                    "yaw": 0,
                    "type": "info",
                    "text": "HIMALAYAN HOSPITAL BACK ENTERENS",
                    "sceneId": "scene5"
                }, ]
        },
        "scene10":{
            "type":"equirectangular",
            "panorama":"img10.jpg",
            "hotSpots":[
                {
                   "pitch": 7,
                    "yaw": 360,
                    "type": "scene",
                    "text": "HOSTEL || UNIVERSITY PLAYGROUND ||COLLAGE",
                    "sceneId": "scene101" 
                },
                {
                    "pitch": 11,
                     "yaw": -38,
                     "type": "info",
                     "text": " MBBS GIRLS HOSTEL ",
                
                 }
            ]
        },

        "scene101":{
            "type":"equirectangular",
            "panorama":"img101.jpg",
            "hotSpots":[
                {
                   "pitch": -1,
                    "yaw": 360,
                    "type": "scene",
                    "text": "HOSTEL || UNIVERSITY PLAYGROUND ||COLLAGE",
                    "sceneId": "scene11" 
                },
                {
                "pitch": -1,
                "yaw": 93,
                "type": "scene",
                "text": "***************",
                "sceneId": "scene11" 
            },
                {
                    "pitch": 2,
                     "yaw": -24,
                     "type": "info",
                     "text": " MBBS GIRLS HOSTEL ",
                
                 },
                 {
                    "pitch": 6,
                     "yaw": 140,
                     "type": "info",
                     "text": " HSST// HSMS GIRLS HOSTEL ",
                
                 },
                 {
                    "pitch": 8,
                     "yaw": 105,
                     "type": "info",
                     "text": " HSST// HSMS BOYS HOSTEL ",
                
                 }
            ]
        },
        "scene11":{
            "type":"equirectangular",
            "panorama":"imgsrhu.jpg",
            "hotSpots":[
                {
                   "pitch": 7,
                    "yaw": 360,
                    "type": "scene",
                    "text": "HSST,HSMS,HSBS",
                    "sceneId": "scene12" 
                },
                {
                    "pitch": 11,
                     "yaw": -38,
                     "type": "info",
                     "text": "............................ ",
                
                 }
            ]
        },
      
        "scene12":{
            "type":"equirectangular",
            "panorama":"img11.jpg",
            "hotSpots":[
                {
                   "pitch": 3,
                    "yaw": 15,
                    "type": "scene",
                    "text": "HIMALAYAN SCHOOL OF MANAGEMENT SCIENCE",
                    "sceneId": "scene13" 
                },
                {
                    "pitch": 29,
                     "yaw": -40,
                     "type": "info",
                     "text": "HIMALAYAN SCHOOL OF SCIENCE AND TECHNOLOGY BUILDING",
     
                 } ,
                 {
                     "pitch": 6,
                      "yaw": 120,
                      "type": "info",
                      "text": "UNIVERSITY GROUND",
      
                  },
                  {
                    "pitch": 0,
                     "yaw": 150,
                     "type": "info",
                     "text": " TWO WHEELER PARKING AREA",
     
                 }
                 ,
                 {
                   "pitch": 6,
                    "yaw": 220,
                    "type": "info",
                    "text": " HIMALAYAN SCHOOL OF BIO SCIENCE BUILDING",
                }
    
                ]
        },
        "scene13":{
            "type":"equirectangular",
            "panorama":"HSMS.jpg",
            "hotSpots":[
                {
                   "pitch": 7,
                    "yaw": -35,
                    "type": "scene",
                    "text": "ENGINEERS BUILDING",
                    "sceneId": "scene12" 
                },
                {
                    "pitch": 20,
                     "yaw": 45,
                     "type": "info",
                     "text": " HIMALAYAN SCHOOL OF MANGEMENT SCIENCE  BUILDING",
                
                 },
                 {
                    "pitch": 1,
                     "yaw": 12,
                     "type": "info",
                     "text": "NEW ADMISSION CELL OFFICE"
             
                 }
            ]
        },
    }
});
