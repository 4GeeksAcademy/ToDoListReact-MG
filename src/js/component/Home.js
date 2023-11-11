import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [action, setAction] = useState("");
	const [toDo, setToDo] = useState([]);
	const [deleteVisible, setDeleteVisible] = useState(-1);
	const handleKeyDown = (e) => {
		if (e.key == "Enter" && e.target.value != "") {
			setAction(e.target.value);
			setToDo([ ...toDo, e.target.value]);
			//Para verificaciones
			console.log(e);
			console.log(e.target.value);
			e.target.value = "";
		}
	}
	const manageDelete = (index) => {
		// Crea una copia del array actual
		const updatedToDo = [...toDo];
		// Elimina el item del indice especificado
		updatedToDo.splice(index, 1);
		// Actualiza el array con los datos modificados
		setToDo(updatedToDo);
	};

	const addButton = (index) => {
		return (
			<button className="btn btn-outline-danger d-flex ms-auto" onClick={() => manageDelete(index)}>
				<i className="fa-solid fa-xmark"></i>
			</button>
		);
	};
	return (
		<div className="text-center">
			<div className='container'>
				<div className='add-data mt-5'>
					<h1 className="display-1 text-center">todos</h1>
					<div className="input-group input-group-lg">
						<input className="form-control fs-3" placeholder='Ingrese la tarea a los quehaceres' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onKeyDown={(e) => handleKeyDown(e)} type="text" defaultValue={action} />
					</div>
				</div>
				<div className='list-data'>
					<ul className="list-group d-flex text-start fs-3">
						{toDo.map((todo, index) => {
							return (<li className="list-group-item" key={index} aria-current="true" onMouseEnter={() => {
								setDeleteVisible(index);
								console.log(deleteVisible);
							}} onMouseLeave={() => { setDeleteVisible(-1) }}>{todo}{index == deleteVisible ? addButton(index) : ""}</li>)
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;