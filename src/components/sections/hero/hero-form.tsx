import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function HeroForm() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2500))
    setIsLoading(false)
    setIsSuccess(true)
    setUrl("")

    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Input
            type="url"
            placeholder="Enter your website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading || isSuccess}
            className="h-12 pl-4 pr-4 text-base rounded-lg border-border bg-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            required
            autoComplete="off"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isLoading || !url || isSuccess}
          className={`h-12 px-6 rounded-lg transition-all ${
            isSuccess
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-black hover:bg-black/90'
          }`}
        >
          <div className="flex items-center gap-2">
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Analyzing</span>
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                <span>Ready</span>
              </>
            ) : (
              <>
                <span>Get Report</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </div>
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Free to start • No credit card required • Results in 2 minutes
      </p>
    </form>
  )
}
