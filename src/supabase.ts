import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://xhbyidnhuvfqvtvbcpbn.supabase.co"
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwNDg2NjQxMiwiZXhwIjoxOTIwNDQyNDEyfQ.B0Z8_53KvVhjdbNKZMdYgnYZsws9sCWLSOce_9-5v8k"

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)