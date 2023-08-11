import styles from '@/styles/FilterableList.module.css';

console.log(styles); // {primary, secondary, accent}
console.log(styles.primary); // _primary_1vlwf_1

function FilterableList() {
	return (
		<>
			<form>
				<div className={styles.accent}>
					<label htmlFor="todo"></label>
					<input
						id="todo"
						type="text"
						placeholder="휴일에 할 일"
					/>
				</div>
				<button type="submit">추가</button>
			</form>
		</>
	);
}

export default FilterableList;