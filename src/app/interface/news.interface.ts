export default interface News {
  id?: string;
  title: string;
  image: string;
  subtitle: string;
  description: string;
  summaryDescription: string;
  comment?: string;
  like?: number;
  notLike?: number;
}
