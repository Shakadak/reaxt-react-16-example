defmodule Hello.Mixfile do
  use Mix.Project

  def project, do: [
    app: :hello,
    version: "0.1.0",
    elixir: ">= 1.3.0",
    compilers: [:reaxt_webpack] ++ Mix.compilers,
    build_embedded: Mix.env == :prod,
    start_permanent: Mix.env == :prod,
    deps: deps()
  ]

  def application, do: [
    mod: { Hello.App, [] },
    extra_applications: [:logger]
  ]

  defp deps, do: [
    {:cowboy, "~> 1.0.0"},
    {:plug, "~> 1.6.0"},
    {:reaxt, github: "Shakadak/reaxt", tag: "2.1.3"}
  ]
end
