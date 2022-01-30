import React, { useState } from "react";

import {Modal} from './lib';

export default function ExampleModal() {
	const [isModalActive, setModalActive] = useState(false);
	const handleClickModal = () => isModalActive ? setModalActive(false) : setModalActive(true);
	return (
		<div>
			<button onClick={handleClickModal}>test</button>
			<Modal
				handleClick={handleClickModal}
				isActive={isModalActive}
				modalContent="A new employee has been added !"
				contentStyle={{paddingTop:"4rem",font: "bold 22px/1 sans-serif"}}
				backgroundStyle={{ backgroundColor:"rgba(0,0,0,0.2)"}}
				refresh={true}
			/>
		</div>
	)
}