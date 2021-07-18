import React from "react";
import { Post } from "~/components/Post/Post";

export const Feed = () => {
  return (
    <div className="px-4 bg-white-secondBg h-full w-full overflow-y-auto">
      {/* <EngagementBanner projectName="Volt" /> */}
      <div className="mx-auto container mt-3 space-y-5">
        <Post
          creator={{
            name: "xtremedevx",
            isProjectOwner: true,
            pfp: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
          isFocused={true}
          project={{
            name: "Volt",
            gradient: "",
          }}
          postedtime="1 hour ago"
          title="How we built the world’s fastest package manager."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
          type="Article"
          attachments={[
            "https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/aoqLN7jxbVBuhPydFEe8FFmY/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882",
            "https://wtop.com/wp-content/uploads/2020/12/GettyImages-1193312195.jpg",
            "https://images.idgesg.net/images/article/2017/07/sort_filter_separate_-process_packages-100728387-large.jpg",
            "https://www.incimages.com/uploaded_files/image/1920x1080/parcels-packages-shipping_1940x900_33939.jpg",
          ]}
        />
        <Post
          creator={{
            name: "xtremedevx",
            isProjectOwner: true,
            pfp: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
          project={{
            name: "Volt",
            gradient: "",
          }}
          postedtime="1 hour ago"
          title="How we built the world’s fastest package manager."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
          type="Article"
        />
        <Post
          creator={{
            name: "xtremedevx",
            isProjectOwner: true,
            pfp: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
          project={{
            name: "Volt",
            gradient: "",
          }}
          postedtime="1 hour ago"
          title="How we built the world’s fastest package manager."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
          type="Article"
        />
        <Post
          creator={{
            name: "xtremedevx",
            isProjectOwner: true,
            pfp: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
          project={{
            name: "Volt",
            gradient: "",
          }}
          postedtime="1 hour ago"
          title="How we built the world’s fastest package manager."
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
          type="Article"
        />
      </div>
    </div>
  );
};
