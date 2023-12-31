import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { UserService } from "./user.service";

const getAllUsers: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {

        const result = await UserService.getAllUsers();

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Users retrieved successfully',
            data: result
        })
    }
);

const getSingleUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id;
        const result = await UserService.getSingleUser(id);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User retrieved successfully',
            data: result
        })
    }
);

const updateUser: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const id = req.params.id;
        const updatedData = req.body;
        const result = await UserService.updateUser(id, updatedData);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'User updated successfully',
            data: result
        })
    }
);

export const UserController = {
    getAllUsers,
    getSingleUser,
    updateUser,
}