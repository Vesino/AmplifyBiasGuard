import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PageScoreMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPageScore = {
  readonly id: string;
  readonly page_url?: string | null;
  readonly score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPageScore = {
  readonly id: string;
  readonly page_url?: string | null;
  readonly score?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PageScore = LazyLoading extends LazyLoadingDisabled ? EagerPageScore : LazyPageScore

export declare const PageScore: (new (init: ModelInit<PageScore, PageScoreMetaData>) => PageScore) & {
  copyOf(source: PageScore, mutator: (draft: MutableModel<PageScore, PageScoreMetaData>) => MutableModel<PageScore, PageScoreMetaData> | void): PageScore;
}