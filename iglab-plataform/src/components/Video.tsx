import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning, Wallet } from "phosphor-react";
import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client";

const GET_LESSON_BY_SLUG_QUERY = gql `
query GetLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    videoId
    title
    description
    teacher {
      bio
      avatarURL
      name
    }
  }
}
`

interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useQuery(GET_LESSON_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug,
        }
    })

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[68vh] aspect-video">
                  <Player>
                    <Youtube videoId="GEo7W-uJNkc" />
                    <DefaultUi />
                  </Player>
                </div>
            </div>
            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">

                    <div className="flex-1">
                        <h1 className="text-2xl font-bold"> Aula 01 - Abertura do Ignite Lab</h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">Nessa aula vamos dar início</p>
                        <div className="flex items-center gap-4 mt-6">
                            <img 
                            className="h-16 w-16 rounded-full border-2 border-orange-600"
                            src="https://github.com/yoshinolucas.png" 
                            alt="" />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">Lucas Yudi Yoshino</strong>
                                <span className="text-gray-200 text-sn block">@lcsyudi</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord

                        </a>
                        <a href="" className="p-4 text-sm border border-orange-600 text-orange-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-orange-600 hover:text-orange-100 transition-colors">
                            <Lightning size={24} />
                            Acesse o Desafio

                        </a>
                    </div>
                  
                </div>
                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray600 transition-colors">
                        <div className="bg-orange-600 h-full p-6 flex items-center">
                            <FileArrowDown size={48} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Material complementar</strong>
                            <p className="text-sn text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray600 transition-colors">
                        <div className="bg-orange-600 h-full p-6 flex items-center">
                            <Image size={48} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Wallpapers exclusivos</strong>
                            <p className="text-sn text-gray-200 mt-2">Baixe wallpapers exclusivos da aula</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>

                    </a>

                </div>
            </div>
        </div>      
    )
}