import { Icon } from "@iconify/react";
import React from "react";
import NewPostCard from "~/components/NewPostCard";
import { Post } from "~/components/Post/Post";

export const Feed = () => {
  return (
    <div className="px-4 bg-white-secondBg h-full w-full overflow-y-auto">
      <div className="mx-auto container mt-3 space-y-3">
        <NewPostCard />
        <Post
          creator={{
            name: "joe(who)mama",
            isProjectOwner: true,
            pfp: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
          project={{
            name: "Gatsby",
            gradient: "",
          }}
          // TASK: Replace iconify emojis with twemoji
          reactions={[
            {
              emoji: <Icon icon="fxemoji-fire" className="h-[0.8rem] w-[0.8rem]" />,
              count: "304",
              selected: false
            },
            {
              emoji: <Icon icon="fxemoji-fire" className="h-[0.8rem] w-[0.8rem]" />,
              count: "144",
              selected: false
            },
            {
              emoji: <Icon icon="fxemoji-fire" className="h-[0.8rem] w-[0.8rem]" />,
              count: "10",
              selected: true
            }
          ]}
          hydraAmount="0"
          reposts="0"
          shares="0"
          title="We think we're better than next js, try changing our mind haters"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
          // attachments={[
          //   "https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/aoqLN7jxbVBuhPydFEe8FFmY/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882",
          //   "https://wtop.com/wp-content/uploads/2020/12/GettyImages-1193312195.jpg",
          //   "https://images.idgesg.net/images/article/2017/07/sort_filter_separate_-process_packages-100728387-large.jpg",
          //   "https://www.incimages.com/uploaded_files/image/1920x1080/parcels-packages-shipping_1940x900_33939.jpg",
          // ]}
        />
      </div>
    </div>
  );
};
