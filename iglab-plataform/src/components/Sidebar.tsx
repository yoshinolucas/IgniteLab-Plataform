import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
    query MyQuery {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            slug
            title
            lessonType
            availableAt
            id
        }
    }
`
interface GetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live'|'class'
        
    }[]
}

export function Sidebar() {

    const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 ml-8 mb-6">
                Cronograma de aulas
            </span>
            <div className="border-b border-orange-400 mt-5" />

            <div className="flex flex-col gap-8 mt-5">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson 
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
        
    )
}