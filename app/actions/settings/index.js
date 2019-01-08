export function setSearchEngine(searchEngine) {
	return {
		type: 'SET_SEARCH_ENGINE',
		searchEngine
	};
}

export function setShowHexData(showHexData) {
	return {
		type: 'SET_SHOW_HEX_DATA',
		showHexData
	};
}

export function setLockTime(lockTime) {
	return {
		type: 'SET_LOCK_TIME',
		lockTime
	};
}