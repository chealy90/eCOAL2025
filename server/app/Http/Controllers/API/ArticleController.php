<?php

namespace App\Http\Controllers\API;

use App\Models\Article;
use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

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
            'thumbnailURL' => 'required|file|mimes:jpeg,png,jpg,gif,svg, video/mp4, video/avi',
            'mediaType' => 'string',
            'mediaURL' => 'required|file|mimes:jpeg,png,jpg,gif,svg, video/mp4, video/avi',
        ]);

        $f1 = $request->file('thumbnailURL')->hashName();
        $request->file('thumbnailURL')->move("upload", $f1);

        $f2 = $request->file('mediaURL')->hashName();
        $request->file('mediaURL')->move("upload", $f2);
        

        $fileName1 = Storage::url("upload/".$f1);
        $fileName2 = Storage::url("/upload/".$f2);

        $article = Article::create(
            [
                'title' => $request->input('title'),
                'content' => $request->input('content'),
                'thumbnailURL' => $fileName1,
                'leadStory' => $request->input('leadStory'),
                'mediaType' => $request->input('mediaType'),
                'mediaURL' => $fileName2,
            ]
        );

        $tags = explode(",", $request->input('tags'));
        foreach($tags as $tag) {
            $tag = trim($tag);
            $tmp = Tag::where("name", $tag)->first();
            if(!$tmp) 
                $tmp = Tag::create(["name" => $tag]);
            
            $article->tags()->attach($tmp->id);
        }
        
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
