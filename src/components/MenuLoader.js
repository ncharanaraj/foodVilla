const MenuLoader = () => {
  return (
    <div className="max-w-screen-md m-auto" data-testid="menuShimmer">
      <div className="w-full h-32 bg-gray-200 my-4 rounded-md p-2">
        <div className="bg-gray-100 rounded-md h-full w-1/4 float-right"></div>
      </div>

      <div className="w-full h-32 bg-gray-200 mb-4 rounded-md p-2">
        <div className="bg-gray-100 rounded-md h-full w-1/4 float-right"></div>
      </div>

      <div className="w-full h-32 bg-gray-200 mb-4 rounded-md p-2">
        <div className="bg-gray-100 rounded-md h-full w-1/4 float-right"></div>
      </div>
    </div>
  );
};

export default MenuLoader;
