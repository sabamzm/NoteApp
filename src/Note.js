import {useState} from "react";
import './Note.css'


const Note = ({note, onSave, onDelete}) => {
    const [text, setText] = useState(note.text);

    const handelChange = (event) => {
        setText(event.target.value);
    };

    const handeleSave = () => {
        onSave({...note, text});
    };

    return(
        <div className="note">
            <textarea value={text} onChange={handelChange} maxLength={500}/>
            <button className="btn_save" onClick={handeleSave}>save</button>
            <button className="btn_delete" onClick={onDelete}>Delete</button>
        </div>
    );
};

export default Note