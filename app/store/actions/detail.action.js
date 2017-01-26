"use strict";

import actionTypes from "./actionTypes";
import details from "../../mock/details.js";

function setDetail(detail) {
	return { type: actionTypes.detailLoaded, detail };
}

function clearDetail() {
	return { type: actionTypes.detailCleared };
}

export function loadDetails(id) {
	return (dispatch) => {
		dispatch(clearDetail());

		setTimeout(() => {
			const detail = details(id);

			dispatch(setDetail(detail));
		}, 1000);
	}
}
