import { IImage } from "../../../shared/Interfaces/Image/IImage"
import { IBlocks } from "../components/Blocks"

export interface IPageData {
  Title: string,
  Body: string,
  Blocks: IBlocks,
  heroImage: IImage,
  createdAt: string,
  publishedAt: string,
  updatedAt: string
}