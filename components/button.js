export default function Button(props) {
  return (
    <button
    {...props}    
    className="text-md px-5 py-2.5 text-center my-2 bg-pink-200 hover:bg-pink-300 focus:ring-4 focus:ring-pink-100 rounded-full border border-solid border-white shadow-inner">
      {props.children}
    </button>
  );
}
