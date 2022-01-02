type PropTypes = {
    value: string;
}

export function Square(props: PropTypes){
    return ( <button className="border w-32 h-32">{props.value}</button>)
}