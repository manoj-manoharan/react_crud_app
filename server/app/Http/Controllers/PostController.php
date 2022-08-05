<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return LengthAwarePaginator
     */
    public function index(): LengthAwarePaginator
    {
        return DB::table('posts')->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request): Response
    {
        $post = new Post();

        $post->userId = $request->userId;
        $post->title = $request->title;
        $post->body = $request->body;

        $post->save();

        return response([
            "created" => true
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @return Post
     */
    public function show(Post $post): Post
    {
        return $post;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Post $post
     * @return Response
     */
    public function update(Request $request, Post $post): Response
    {
        $post->userId = $request->userId;
        $post->title = $request->title;
        $post->body = $request->body;

        $post->save();

        return response([
            "updated" => true
        ], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     * @return Response
     */
    public function destroy(Post $post): Response
    {
        $post->delete();

        return response([
            "deleted" => true
        ], 200);
    }
}
