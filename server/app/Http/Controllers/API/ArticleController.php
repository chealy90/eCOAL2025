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
       $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'thumbnailURL' => 'required|url',
            'leadStory' => 'required|boolean',
            'mediaURL' => 'url',
        ]);

        /* Pour upload des fichiers (test pas possible avec Postman)

        $f1 = $request->file('thumbnailURL')->hashName();
        $request->file('thumbnailURL')->move("upload", $f1);

        $f2 = $request->file('mediaURL')->hashName();
        $request->file('mediaURL')->move("upload", $f2);

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
        $validated = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'thumbnailURL' => 'required|url',
            'leadStory' => 'required|boolean',
            'mediaURL' => 'url',
        ]);

        $article->title=$request->input('title');
        $article->content=$request->input('content');
        $article->thumbnailURL=$request->input('thumbnailURL');
        $article->leadStory=$request->input('leadStory');
        $article->mediaURL=$request->input('mediaURL');
        $article->save();

        return response()->json($article, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $article->tags()->detach();
        $article->delete();
        return response()->json(null, 204);
    }
}
