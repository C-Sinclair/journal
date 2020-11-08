# Journal

This project is a rework of the current flow for constant journalling I currently use Notion for. The plan is to incorporate all of the features I use already and improve upon them.

## Requirements

- Should be markdown writing style just like Notion
- Should auto open on today's date with the template setup
- New entries to a day should be default
    - with timestamp
    - with current location
- Should allow for future reminders to be set
    - Would be cool if it notified me via text at a given time
- Should have pages setup for each Github project I have
    - Setup automatically
- No need to timestamp my comments
- Current weather display
- Easy access to the file upload store
- Search ability over notes
- Public version so people (Kate) can see my schedule
- Git hook which adds a commit block in the day entry
- A link can be an entry

## Backend

Supabase for realtime db and authentication

### Datastructures

```elixir
Journal # top level container, per user level
Day # container for the day
    |> Date
|> Entry # entry is a simple timestamped comment
    |> Timestamp
    |> Body
    |> Location
|> Todos # simple list of todos
    |> Body
    |> Completed at # datetime | null
|> Info
    |> Weather # fetched from API
    |> Time spent writing # integrate wakatime
Entry =
| Text # User created Markdown text
| Link # Hyperlink to web page / file
| Commit # Auto gen / manual from a git commit hash, project, message
| Event # Can trigger notifications - text message or push. Could be the mechanism for adding ahead of time
```

## Frontend

### Routing

Decided to spin up my own routing package for this project since the needs aren't great