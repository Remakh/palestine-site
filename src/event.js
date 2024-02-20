import { logo, logo2, s1, s2, s3 } from "./assets"


const event1 = {
                    'id': 1, 
                    'title' : 'Cultural Theft', 
                    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    'image': s1,
                    'date' : 'October 5, 1999',
                    'time' : '6:00 PM',
                    'location' :'Sarajevo, Bosnia'
                }

const event2 = {
                    'id': 2, 
                    'title' : 'Shaping the Narrative', 
                    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    'image': logo,
                    'date' : 'October 5, 1999',
                    'time' : '6:00 PM',
                    'location' : 'Beijing, China'


                }

const event3 = {
                    'id': 3, 
                    'title' : 'Volunteer for FoP', 
                    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    'image': s3,
                    'date' : 'October 5, 1999',
                    'time' : '6:00 PM',
                    'location' : 'Hanoi, Vietnam'
                }

const event4 = {
    'id': 4, 
    'title' : 'Volunteer for FoP', 
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'image': s3,
    'date' : 'October 5, 1999',
    'time' : '6:00 PM',
    'location' : 'Hanoi, Vietnam'
}
const events = [event1, event2, event3, event4]

export async function getEvent( id ) {
    const event = events.filter(e => e.id == id)
    return event[0]
}

export async function getEvents() {
    return events
}

export default events