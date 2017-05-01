const logger = ((store) => (next) => (action) =>{
    console.log("%cAction Fire!", 'color: green ',action.type);
    next(action);
});

export default logger;
