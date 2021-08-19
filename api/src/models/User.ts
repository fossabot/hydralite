import {
  Model,
  Property,
  Id,
  Relation,
  Unique,
  Default,
  UpdatedAt,
} from "decotix";
import { ObjectType, ID, Field, Int } from "type-graphql";
import { BugReport } from "./BugReport";
import { FeatureRequest } from "./FeatureRequest";
import { Hashtag } from "./Hashtag";
import { InterestOrSkill } from "./InterestOrSkill";
import { OauthConnection } from "./OauthConnection";
import { OpportunityApplicant } from "./OpportunityApplicant";
import { Post } from "./Post";
import { PostComment } from "./PostComment";
import { PostLabel } from "./PostLabel";
import { Project } from "./Project";
import { ProjectMember } from "./ProjectMember";
import { TokenPair } from "./TokenPair";
import { UserProfile } from "./UserProfile";

@Model()
@ObjectType()
export class User {
  @Field(() => ID)
  @Property(() => String)
  @Id("uuid")
  id: string;

  @Field()
  @Property()
  @Unique()
  username: string;

  @Field()
  @Property()
  email: string;

  @Field(() => Int)
  @Property(() => Int)
  hydra: number;

  @Field()
  @Property()
  @Default("false")
  isSiteAdmin: boolean;

  @Field(() => UserProfile)
  @Property(() => UserProfile)
  @Relation("UserProfileRelation", {
    fields: ["profileId"],
    references: ["id"],
  })
  profile?: UserProfile;

  @Field(() => [Project])
  @Property(() => [Project])
  ownedProjects?: Project[];

  @Field(() => [ProjectMember])
  @Property(() => [ProjectMember])
  allProjects?: ProjectMember[];

  // TODO: Add Liked Projects relation
  @Field(() => [Project])
  @Property(() => [Project])
  @Relation("UserLikedProjectsRelation")
  likedProjects?: Project[];

  // TODO: Add Followed Projects relation
  @Field(() => [Project])
  @Property(() => [Project])
  @Relation("UserFollowedProjectsRelation")
  followedProjects?: Project[];

  @Field(() => [OauthConnection])
  @Property(() => [OauthConnection])
  oauthConnections?: OauthConnection[];

  @Field(() => [TokenPair])
  @Property(() => [TokenPair])
  tokens?: TokenPair[];

  @Field(() => [User])
  @Relation("UserFollowRelation", { references: ["id"] })
  @Property(() => [User])
  following?: User[];

  @Field(() => [User])
  @Relation("UserFollowRelation", { references: ["id"] })
  @Property(() => [User])
  followers?: User[];

  // TODO: Add Post relationships

  @Field(() => [Post])
  @Relation("UserOwnedPostsRelation")
  @Property(() => [Post])
  posts?: Post[];

  @Field(() => [Post])
  @Relation("UserLikedPostsRelation")
  @Property(() => [Post])
  likedPosts?: Post[];

  @Field(() => [PostComment])
  @Relation("UserLikedCommentsRelation")
  @Property(() => [PostComment])
  likedComments?: PostComment[];

  @Field(() => [Post])
  @Relation("PostVisibleToRelation")
  @Property(() => [Post])
  viewablePosts?: Post[];

  @Field(() => [InterestOrSkill])
  @Property(() => [InterestOrSkill])
  createdInterestOrSkills?: InterestOrSkill[];

  @Field(() => [PostComment])
  @Property(() => [PostComment])
  createdPostComments?: PostComment[];

  @Field(() => [Hashtag])
  @Property(() => [Hashtag])
  createdHashtags?: Hashtag[];

  @Field(() => [PostLabel])
  @Property(() => [PostLabel])
  postLabels?: PostLabel[];

  @Field(() => [BugReport])
  @Property(() => [BugReport])
  bugReports?: BugReport[];

  @Field(() => [FeatureRequest])
  @Property(() => [FeatureRequest])
  featureRequests?: FeatureRequest[];

  @Field(() => [OpportunityApplicant])
  @Property(() => [OpportunityApplicant])
  appliedOpportunities?: OpportunityApplicant[];

  @Field()
  @Property()
  @Default("now")
  createdAt: Date;

  @Field()
  @Property()
  @UpdatedAt()
  updatedAt: Date;
}
