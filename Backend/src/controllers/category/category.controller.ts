import { Body, Controller, Post, Get, Patch, Param, Delete } from '@nestjs/common';
//import { CheckAuth, User } from 'src/guards';
import { CategoryService } from 'src/core/services';
import { CreateCategoryReqApiDto } from './dto/create-category.dto';
import { UpdateCategoryReqApiDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    //@CheckAuth()
    async getCategories(): Promise<any> {
        const category = await this.categoryService.findAll();
        return category;
    }

    @Get(':id')
    //@CheckAuth()
    async getCategory(@Param() params): Promise<any> {
        const category = await this.categoryService.findOne(params.id);
        return category;
    }

    @Post()
    //@CheckAuth()
    async createCategory(@Body() categoryDto: CreateCategoryReqApiDto): Promise<any> {
        console.log(categoryDto)
        const category = await this.categoryService.create(categoryDto);
        return category;
    }

    @Patch(':id')
    //@CheckAuth()
    async updateCategory(@Param() params: number, @Body() categoryDto: UpdateCategoryReqApiDto): Promise<any> {
        const category = await this.categoryService.update(params["id"], categoryDto);
        return category;
    }

    @Delete(':id')
    //@CheckAuth()
    async deleteCategory(@Param() params: number): Promise<any> {
        const category = await this.categoryService.remove(params["id"]);
        return category;
    }
}