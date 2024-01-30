import axios from "axios";
import { useMutation, useQueries, useQuery, useQueryClient } from 'react-query'


export const GetAllStudents = () =>
{
    return axios.get('http://localhost:4114/colors');
}

export const getAllStudents = () =>
{
    return axios.get('http://localhost:4114/students');
}

export const getAllColors = () =>
{
    return axios.get('http://localhost:4114/colors');
}

export const FetchColors = ({ pageNumber = 1}) =>
{
    return axios.get(`http://localhost:4114/colors?_limit=2&_page=${pageNumber}`);
}

// export const FetchColors = (pageNumber) =>
// {
//     return axios.get(`http://localhost:4114/colors?_limit=2&_page=${pageNumber}`);
// }

export const AllStudentData = (onSuccess, onError) => 
{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery('all-student', getAllStudents, 
    { 
            cacheTime: 5000 ,
            onSuccess,
            onError,
            select: (data) => 
            {
                const onlyName = data.data.map((d) => d.firtname);
                return onlyName;   
            }
    });
}

export const GetStudent = (userId)  => 
{
    return axios.get(`http://localhost:4114/students/${userId}`);
}

export const StudentData = (userId) => 
{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(['student', userId], () => GetStudent(userId));
}

export const DynamicParallelQuery = ({userIds}) => 
{
    const dynamicQueryResults = useQueries(
        userIds.map((id) => 
        {
            return {
                queryKey: ['students', id],
                queryFn: StudentData(id),
            }
        })   
    )
    console.log({ dynamicQueryResults });
}



const fetchUserByEmail = (email) => 
{
    return axios.get(`http://localhost:4114/students/${email}`);
}

const fetchCourseByChannelId = (channelId) => 
{
    return axios.get(`http://localhost:4114/channels/${channelId}`);
}

export const DependentQuery = ({ email }) => 
{
    const { data: user } = useQuery (['user', email], () => fetchUserByEmail)
    const channelId = user?.data.channelId

    useQuery(['courses', channelId], () => fetchCourseByChannelId(channelId), 
    {
        enabled: !!channelId,
    })
}



export const GetStudentDetail = (userId)  => 
{
    return axios.get(`http://localhost:4114/students/${userId}`);
}

export const StudentDetail = (userId) => 
{
    const queryClient = useQueryClient();
    return useQuery(['student-detail', userId], GetStudentDetail, {
        initialData: () => {
            const student = queryClient.getQueryData('all-student')?.data.find((student) => student.id === parseInt(userId))
            if(student)
            {
                return { data: student }
            } else {
                return undefined
            }
        }
    })
}






const addColors = (color) =>
{
    console.log("colorcolorcolorcolor");
    console.log(color);
    console.log("colorcolorcolorcolor");
    return axios.get('http://localhost:4114/colors', color);
}

export const MakeColors = () =>
{
    return useMutation(addColors)
}

export const AllColors = (onSuccess, onError) => 
{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery('all-colors', getAllColors, 
    { 
            onSuccess,
            onError
    });
}




//   const { allStudent,  data, isError, error, isFetching, refetch } = useQuery('all-student', 
//   getAllStudents, { cacheTime: 5000 }, { staleTime: 3000 }, { refetchOnMount: true }, { refetchOnMWindowocus: true,
//   { refreshInterval: 2000, refreshIntervalInBackground: true }, { enable: false }, 
//   { 
//       select: (data) => {
//           const onlyName = data.data.map((d) => d.firtname);
//           return onlyName;             
//       }
// }
//   });          