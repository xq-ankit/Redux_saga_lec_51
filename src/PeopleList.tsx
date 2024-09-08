import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestUsers } from "./actions/user";
import { getPeopleData, isDataLoading } from "./selectors/users";
import PersonCard from "./PersonCard";
import LoadingPage from "./LoadingPage"; 

const PeopleList = () => {
  const people = useSelector(getPeopleData());
  const loading = useSelector(isDataLoading());
  const dispatch = useDispatch();

  const fetchNewPeople = (count: number) => {
    dispatch(requestUsers(count));
  };

  useEffect(() => {
    if (Object.keys(people).length === 0) {
      dispatch(requestUsers(5));
    }
  }, [dispatch, people]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">People List</h1>
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => fetchNewPeople(5)}
        >
          Fetch New People
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          <LoadingPage />
        ) : (
          Object.keys(people).map((id) => <PersonCard key={id} {...people[id]} />)
        )}
      </div>
    </div>
  );
};

export default PeopleList;
