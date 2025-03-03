<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Article::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //return response()->json(Article::find(1), 201);
       /*$validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'thumbnailURL' => 'required|url',
            'leadStory' => 'required|boolean',
        ]);
*/
        $article = Article::create(
            [
                'title' => $request->input('title'),
                'content' => $request->input('content'),
                'thumbnailURL' => $request->input('thumbnailURL'),
                'leadStory' => $request->input('leadStory'),
            ]
        );
        
        return response()->json($article, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return $article;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
