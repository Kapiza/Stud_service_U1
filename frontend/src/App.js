import './styles/App.css'
// import Subject from "./components/Subject";
import {useState} from "react";
// import MyModal from "./components/MyModal";
// import SubjectForm from "./components/SubjectForm";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import { DisContext } from './context';



function App() {

    const [disId, setDisId] = useState(1)
    
    return (
        <DisContext.Provider value={{
            disId,
            setDisId
        }}>
            <div className="App">
                <div className="wrapper">
                    <MainArea />
                    <Sidebar />

                </div>
                {/*<Subject subject={subjects[SSI]} addNote={addNote} removeNote={removeNote}/>*/}
                {/*<SubjectMenu subjects={subjects} setSSI={setSSI} setModalVisible={setModalVisible}*/}
                {/*             removeSubject={removeSubject}/>*/}
                {/*<MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}>*/}
                {/*    <SubjectForm addSubject={addSubject}/>*/}
                {/*</MyModal>*/}
            </div>
         </DisContext.Provider>
    );
}

export default App;

//     {
//         id:0,
//         title:"1",
//         subTitle:"Кириллов Р. Р.",
//         notes: [
//             {
//                 id: 1,
//                 title: "Раз"
//             },
//             {
    //                 id: 2,
    //                 title: "Раз-Два"
    //             }
//         ]
//     },
//     {
//         id:1,
//         title:"2",
//         subTitle:"Кириллов Р. Р.",
//         notes: [
//             {
    //                 id: 3,
//                 title: "Два"
//             }
//         ]
//     },
//     {
    //         id:2,
    //         title:"3",
    //         subTitle:"Кириллов Р. Р.",
    //         notes:  [
//             {
//                 id: 4,
//                 title: "Три"
//             }
//         ]
//     },

// const [notes, setNotes] = useState([]);
// const [notesLists, setNotesLists] = useState(
//     [
//         [
    //             {
        //                 id: 1,
        //                 title: "Раз"
        //             },
//             {
    //                 id: 2,
//                 title: "Раз-Два"
//             }
//         ],
//         [
//             {
//                 id: 3,
//                 title: "Два"
//             }
//         ],
//         [
//             {
    //                 id: 4,
    //                 title: "Три"
    //             }
    //         ]
//     ]
// );

    // async function get() {
    //     const response = await axios.get("http://localhost:5000/get")

    //     setSubjects(response.data.subjects);
    // }
    // const uri = "http://localhost:5000/post";
    
    // async function post(postData) {
    //      await axios.post(uri, postData)
    // }

    // async function put(updatedData) {
    //     await axios.put("http://localhost:5000/update", updatedData)
    // }

    // async function deleteMethod(deletedData) {
    //     await axios.delete("http://localhost:5000/delete",  { data: deletedData });
    // }

    // useEffect(() => {
    //     // get();
    // }, [])

    //
        // const [subjects, setSubjects] = useState([]);
        
        // const addSubject = (newSubject) => {
        //     // post(newSubject)
        //     setSubjects([...subjects, newSubject])
        //     setModalVisible(false)
        // }
        
        // const removeSubject = (subject) => {
        //     setSubjects(subjects.filter((s) => s.id !== subject.id))
        
        //     // deleteMethod({SSI, subject })
        
        // }
        
        // const addNote = (note) => {
        //     const list  = [...subjects];
        //     list[SSI].notes.push(note);
        //     setSubjects([...list]);
        
        //     // put({SSI, note, add: true});
        // }
        
        // const removeNote = (note) => {
        //     const list  = [...subjects];
        //     list[SSI] = {
        //         ...list[SSI],
        //         notes: list[SSI].notes.filter(n => n.id !== note.id)
        //     };
        //     setSubjects([...list]);
        //     // const updatedData ;
        //     // put({SSI, note, add:false});
        
        // }
        
        // const [SSI, setSSI] = useState(0) // selectedSubjectIndex
        
        // const [modalVisible, setModalVisible] = useState(false);
