import produce from 'immer';
import create from 'zustand';

const useStore = create((setStore) => ({
	scroll: null, // ? locomotive-scroll’s instance

	fullscreen: false, // ? mobile fullscreen menu

	setStore: (fn) => setStore(produce(fn)), // ? https://github.com/pmndrs/zustand#sick-of-reducers-and-changing-nested-state-use-immer
}));

export default useStore;
